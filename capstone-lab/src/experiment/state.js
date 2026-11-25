function set(k,v){sample()[k]=v;save();render()}
function setting(k,v){if(k==='step1'&&all().some(s=>s.tn1.length)&&String(v)!==String(state.settings.step1)){alert('Bước tải đã được sử dụng; giữ nguyên để so sánh các mẫu.');render();return}state.settings[k]=v;save();render()}
function cell(a,i,k,v){sample()[a][i][k]=v;save()}
function add(a){if(sample()[a].length<100){sample()[a].push({});save();render()}}