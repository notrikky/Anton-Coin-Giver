const style = document.createElement('style');
style.innerHTML = `
    #coin-input::-webkit-outer-spin-button,
    #coin-input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    #coin-input {
        -moz-appearance: textfield;
    }
`;
document.head.appendChild(style);

const iconSvg = 'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20160%20160%22%3E%0A%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%3Cpath%20fill%3D%22%23FFE71C%22%20d%3D%22M80.03.18a79.9%2079.9%200%201%201%200%20159.82%2079.9%2079.9%200%200%201%200-159.81%22%3E%3C%2Fpath%3E%0A%3Cpath%20fill%3D%22%23F9C91F%22%20d%3D%22M80.03%2015.12a64.97%2064.97%200%201%201%200%20129.94%2064.97%2064.97%200%200%201%200-129.94%22%3E%3C%2Fpath%3E%0A%3Cpath%20fill%3D%22%23FAB80D%22%20d%3D%22M21.46%2082.4a64.97%2064.97%200%200%201%2083.78-62.2%2064.77%2064.77%200%200%200-25.21-5.08%2064.97%2064.97%200%200%200-18.8%20127.17%2064.99%2064.99%200%200%201-39.77-59.9%22%3E%3C%2Fpath%3E%0A%3Cpath%20fill%3D%22%23FFF650%22%20d%3D%22M145%2080.1a64.97%2064.97%200%200%201-83.78%2062.2%2064.77%2064.77%200%200%200%2025.22%205.07%2064.97%2064.97%200%200%200%2018.8-127.18A64.99%2064.99%200%200%201%20145%2080.1%22%3E%3C%2Fpath%3E%0A%3Cpath%20fill%3D%22%23FFF550%22%20fill-rule%3D%22nonzero%22%20d%3D%22M68.5%2045.5v65.27a8.5%208.5%200%201%200%2017%200V45.5a8.5%208.5%200%201%200-17%200z%22%3E%3C%2Fpath%3E%0A%3Cpath%20fill%3D%22%23FAB80D%22%20fill-rule%3D%22nonzero%22%20d%3D%22M74.5%2050.5v65.27a8.5%208.5%200%201%200%2017%200V50.5a8.5%208.5%200%201%200-17%200z%22%3E%3C%2Fpath%3E%0A%3Cpath%20fill%3D%22%23FFDE00%22%20fill-rule%3D%22nonzero%22%20d%3D%22M71.5%2047.5v65.27a8.5%208.5%200%201%200%2017%200V47.5a8.5%208.5%200%201%200-17%200z%22%3E%3C%2Fpath%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E';

const toggleBtn = document.createElement('button');
toggleBtn.id = 'cheat-toggle-btn';
toggleBtn.innerHTML = `<img src="${iconSvg}" style="width: 100%; height: 100%; object-fit: contain; pointer-events: none;">`;
toggleBtn.style.position = 'fixed';
toggleBtn.style.bottom = '20px';
toggleBtn.style.right = '20px';
toggleBtn.style.width = '65px';
toggleBtn.style.height = '65px';
toggleBtn.style.padding = '8px';
toggleBtn.style.backgroundColor = '#000000';
toggleBtn.style.border = '2px solid #ffffff';
toggleBtn.style.borderRadius = '50%';
toggleBtn.style.cursor = 'pointer';
toggleBtn.style.zIndex = '10000';
toggleBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
toggleBtn.style.display = 'flex';
toggleBtn.style.justifyContent = 'center';
toggleBtn.style.alignItems = 'center';

const menu = document.createElement('div');
menu.id = 'cheat-menu';
menu.style.position = 'fixed';
menu.style.bottom = '100px';
menu.style.right = '20px';
menu.style.backgroundColor = '#121212';
menu.style.padding = '20px';
menu.style.borderRadius = '16px';
menu.style.boxShadow = '0 8px 20px rgba(0,0,0,0.7)';
menu.style.display = 'none';
menu.style.flexDirection = 'column';
menu.style.gap = '15px';
menu.style.zIndex = '9999';
menu.style.fontFamily = 'sans-serif';
menu.style.border = '1px solid #333333';

const title = document.createElement('h3');
title.innerHTML = 'Coin Menu';
title.style.margin = '0';
title.style.color = '#ffffff';
title.style.textAlign = 'center';
title.style.fontSize = '20px';
title.style.fontWeight = 'bold';

const inputField = document.createElement('input');
inputField.id = 'coin-input';
inputField.type = 'number';
inputField.placeholder = 'Enter coins...';
inputField.style.padding = '12px';
inputField.style.backgroundColor = '#000000';
inputField.style.color = '#ffffff';
inputField.style.border = '2px solid #ffffff';
inputField.style.borderRadius = '10px';
inputField.style.outline = 'none';
inputField.style.fontSize = '14px';

const actionBtn = document.createElement('button');
actionBtn.innerHTML = 'Update';
actionBtn.style.padding = '12px';
actionBtn.style.backgroundColor = '#000000';
actionBtn.style.color = '#ffffff';
actionBtn.style.border = '2px solid #ffffff';
actionBtn.style.borderRadius = '10px';
actionBtn.style.cursor = 'pointer';
actionBtn.style.fontWeight = 'bold';
actionBtn.style.fontSize = '14px';

menu.appendChild(title);
menu.appendChild(inputField);
menu.appendChild(actionBtn);

toggleBtn.addEventListener('click', function() {
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
        toggleBtn.style.backgroundColor = '#222222';
    } else {
        menu.style.display = 'none';
        toggleBtn.style.backgroundColor = '#000000';
    }
});

actionBtn.addEventListener('click', function() {
    let wert = parseInt(inputField.value);
    
    if (!isNaN(wert)) {
        try {
            const addCoins = function(amount) {
                return typeof log != 'undefined' && log !== null ? log.log({
                    event: "adjustCoins",
                    value: amount
                }) : void 0;
            };
            addCoins(wert);
        } catch (error) {}
    }
    
    inputField.value = '';
    
    setTimeout(function() {
        window.location.reload();
    }, 500);
});

setInterval(function() {
    if (window.location.href.includes('/games')) {
        if (!document.getElementById('cheat-toggle-btn')) {
            document.body.appendChild(toggleBtn);
        }
        if (!document.getElementById('cheat-menu')) {
            document.body.appendChild(menu);
        }
    } else {
        if (document.getElementById('cheat-toggle-btn')) {
            toggleBtn.remove();
        }
        if (document.getElementById('cheat-menu')) {
            menu.style.display = 'none';
            toggleBtn.style.backgroundColor = '#000000';
            menu.remove();
        }
    }
}, 1000);
