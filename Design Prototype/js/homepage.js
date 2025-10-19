// 全局变量存储当前选中的卡片
let selectedCard = null;
let isDragging = false;
let dragElement = null;

// 为所有菜品卡片添加点击事件
document.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('click', function() {
        const dishId = this.getAttribute('data-dish');
        
        // 移除之前的选中状态
        if (selectedCard) {
            selectedCard.classList.remove('selected');
        }
        
        // 移除所有高亮
        document.querySelectorAll('.time-cell').forEach(cell => {
            cell.classList.remove('highlight');
        });
        
        // 设置新的选中状态
        this.classList.add('selected');
        selectedCard = this;
        
        // 高亮对应的特定时间块
        document.querySelectorAll(`.time-cell[data-dish="${dishId}"]`).forEach(cell => {
            cell.classList.add('highlight');
        });
    });
});

// 为高亮的时间块添加拖拽功能
document.addEventListener('mousedown', function(e) {
    if (e.target.classList.contains('time-cell') && e.target.classList.contains('highlight')) {
        e.preventDefault();
        
        const originalCell = e.target;
        let hasMoved = false;
        
        const onMouseMove = function(moveEvent) {
            moveEvent.preventDefault();
            
            if (!hasMoved) {
                hasMoved = true;
                isDragging = true;
                
                // 创建拖拽元素
                dragElement = document.createElement('div');
                dragElement.id = 'drag-ghost-element';
                dragElement.style.position = 'fixed';
                dragElement.style.zIndex = '999999';
                dragElement.style.backgroundColor = '#ff9a56';
                dragElement.style.color = 'white';
                dragElement.style.padding = '20px 30px';
                dragElement.style.borderRadius = '15px';
                dragElement.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
                dragElement.style.fontWeight = 'bold';
                dragElement.style.fontSize = '1.3em';
                dragElement.style.pointerEvents = 'none';
                dragElement.style.transform = 'rotate(-5deg)';
                
                // 显示菜品名称
                if (selectedCard) {
                    const recipeName = selectedCard.querySelector('.recipe-name').textContent;
                    dragElement.textContent = recipeName;
                } else {
                    dragElement.textContent = 'Recipe Tag';
                }
                
                document.body.appendChild(dragElement);
                originalCell.style.opacity = '0.3';
                
                console.log('拖拽元素已创建，ID:', dragElement.id);
            }
            
            // 更新拖拽元素位置
            if (dragElement) {
                dragElement.style.left = (moveEvent.clientX + 10) + 'px';
                dragElement.style.top = (moveEvent.clientY + 10) + 'px';
                
                // 检查是否在instruction区域
                const instruction = document.querySelector('.instruction');
                const rect = instruction.getBoundingClientRect();
                
                if (moveEvent.clientX >= rect.left && 
                    moveEvent.clientX <= rect.right &&
                    moveEvent.clientY >= rect.top && 
                    moveEvent.clientY <= rect.bottom) {
                    instruction.classList.add('drag-over');
                } else {
                    instruction.classList.remove('drag-over');
                }
            }
        };
        
        const onMouseUp = function(upEvent) {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            
            originalCell.style.opacity = '';
            
            const instruction = document.querySelector('.instruction');
            instruction.classList.remove('drag-over');
            
            if (hasMoved && dragElement) {
                console.log('拖拽结束');
                
                // 检查是否拖到了instruction区域
                const rect = instruction.getBoundingClientRect();
                
                if (upEvent.clientX >= rect.left && 
                    upEvent.clientX <= rect.right &&
                    upEvent.clientY >= rect.top && 
                    upEvent.clientY <= rect.bottom) {
                    showSuccessModal();
                }
                
                dragElement.remove();
                dragElement = null;
            } else if (!hasMoved) {
                // 快速点击，进入详情页
                enterDetailPage();
            }
            
            isDragging = false;
            hasMoved = false;
        };
        
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
});

// 显示成功弹窗
function showSuccessModal() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.innerHTML = `
        <div class="modal-header">
            <button class="close-btn">&times;</button>
        </div>
        <div class="modal-body">
            <div class="success-icon">✓</div>
            <p class="success-text">Join successful! Please take the receipt.</p>
        </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
    
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    function closeModal() {
        overlay.remove();
        modal.remove();
    }
}

// 进入详情页面
function enterDetailPage() {
    alert('进入菜品详情页面（待实现）');
}

// 为时间块添加点击事件
document.querySelectorAll('.time-cell').forEach(cell => {
    cell.addEventListener('click', function(e) {
        if (isDragging) {
            return;
        }
        
        if (!this.classList.contains('filled') && !this.classList.contains('public') && !this.classList.contains('highlight')) {
            document.querySelectorAll('.time-cell').forEach(c => {
                c.classList.remove('highlight');
            });
            if (selectedCard) {
                selectedCard.classList.remove('selected');
                selectedCard = null;
            }
        }
    });
});

// 标签页切换功能
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        // 移除所有标签的active状态
        document.querySelectorAll('.tab').forEach(t => {
            t.classList.remove('active');
        });
        
        // 添加当前标签的active状态
        this.classList.add('active');
        
        // 获取点击的标签文本
        const tabName = this.textContent.trim();
        
        // 隐藏所有菜系区域
        document.querySelectorAll('.cuisine-section').forEach(section => {
            section.style.display = 'none';
        });
        
        // 显示对应的菜系
        if (tabName === 'Worldwide') {
            // 显示所有菜系
            document.querySelectorAll('.cuisine-section').forEach(section => {
                section.style.display = 'block';
            });
        } else if (tabName === 'Asian') {
            // 只显示Asian Cuisine
            const asianSection = Array.from(document.querySelectorAll('.cuisine-section')).find(
                section => section.querySelector('.cuisine-title').textContent.includes('Asian')
            );
            if (asianSection) {
                asianSection.style.display = 'block';
            }
        } else if (tabName === 'European') {
            // 只显示European Cuisine
            const europeanSection = Array.from(document.querySelectorAll('.cuisine-section')).find(
                section => section.querySelector('.cuisine-title').textContent.includes('European')
            );
            if (europeanSection) {
                europeanSection.style.display = 'block';
            }
        } else if (tabName === 'Oceania') {
            // 只显示Oceanian Cuisine
            const oceanianSection = Array.from(document.querySelectorAll('.cuisine-section')).find(
                section => section.querySelector('.cuisine-title').textContent.includes('Oceanian')
            );
            if (oceanianSection) {
                oceanianSection.style.display = 'block';
            }
        }
        
        // 滚动到内容区域顶部
        const contentArea = document.querySelector('.content-area');
        contentArea.scrollTop = 0;
    });
});

// 为菜谱区域添加鼠标拖拽滚动功能
document.querySelectorAll('.cuisine-section').forEach(section => {
    let isDown = false;
    let startX;
    let scrollLeft;
    let hasDragged = false;

    section.addEventListener('mousedown', (e) => {
        // 如果点击的是卡片，不启动拖拽滚动
        if (e.target.closest('.recipe-card')) {
            return;
        }
        
        isDown = true;
        hasDragged = false;
        section.style.cursor = 'grabbing';
        startX = e.pageX - section.offsetLeft;
        scrollLeft = section.scrollLeft;
    });

    section.addEventListener('mouseleave', () => {
        isDown = false;
        section.style.cursor = 'default';
    });

    section.addEventListener('mouseup', () => {
        isDown = false;
        section.style.cursor = 'default';
        
        // 短暂延迟后重置标志，防止点击事件触发
        setTimeout(() => {
            hasDragged = false;
        }, 10);
    });

    section.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        hasDragged = true;
        const x = e.pageX - section.offsetLeft;
        const walk = (x - startX) * 2; // 滚动速度倍数
        section.scrollLeft = scrollLeft - walk;
    });

    // 阻止拖拽滚动时触发卡片点击
    section.addEventListener('click', (e) => {
        if (hasDragged && e.target.closest('.recipe-card')) {
            e.stopPropagation();
            e.preventDefault();
        }
    }, true);
});