// V2.9: progressive disclosure; preserve open panels across render() calls.
const open28=new Map();
function context28(){return [page,page===3?aggregateTab:page===6?di+'-'+internalTab:page===7?key()+'-'+detailTab:page===2?key()+'-'+test:page===4?mi:''].join(':')}
function fold28(nodes,title,id,meta=''){
 if(!nodes.length)return;
 const d=document.createElement('details');d.className='fold28';d.dataset.fold=id;
 const s=document.createElement('summary');const t=document.createElement('span');t.textContent=title;s.append(t);
 if(meta){const m=document.createElement('small');m.textContent=meta;s.append(m)}
 const body=document.createElement('div');body.className='foldbody28';nodes[0].before(d);d.append(s,body);nodes.forEach(n=>body.append(n));
 d.open=open28.get(id)===true;d.addEventListener('toggle',()=>open28.set(id,d.open));return d;
}
function compact28(){const root=document.querySelector('#view'),ctx=context28();if(!root)return;
 const analysis=[3,6,7,8,4].includes(page);
 // Split regression sections into individual branches, and keep their controls with each plot.
 if(analysis){for(const sec of [...root.querySelectorAll(':scope > section:not(.module25)')]){
  const title=sec.querySelector(':scope > h2')?.textContent||'';
  if(!/^(Hồi quy ·|So sánh đường hồi quy)/.test(title))continue;
  const children=[...sec.children];const starts=children.map((n,i)=>n.tagName==='H3'&&/^(Nhánh nén|Nhánh nhả|Nén ·|Nhả ·)/.test(n.textContent)?i:-1).filter(i=>i>=0);
  for(let j=starts.length-1;j>=0;j--){let a=starts[j],b=starts[j+1]??children.length;fold28(children.slice(a,b),children[a].textContent,ctx+':'+title+':'+j,'Đồ thị · phương trình · sai số')}
 }}
 // Individual analysis cards, including nested residual and derivative cards.
 for(const sec of [...root.querySelectorAll('section.module25')]){
  const title=sec.querySelector(':scope > h2')?.textContent||'Kết quả phân tích';const id=ctx+':'+(sec.id||title);const mod=modules25.find(m=>'mod-'+m.id===sec.id);let count=mod?.rows?.length;
  const nodes=[sec];const prev=sec.previousElementSibling;if(prev?.tagName==='LABEL'&&prev.textContent.includes('Mô hình hồi quy'))nodes.unshift(prev);
  fold28(nodes,title,id,Number.isInteger(count)?count+' dòng kết quả':'Bảng · đồ thị · phương pháp');
 }
 if(analysis||page===1||page===5){let n=0;for(const sec of [...root.querySelectorAll(':scope > section')]){const title=sec.querySelector(':scope > h2')?.textContent||'Thông tin chi tiết';fold28([sec],title,ctx+':section:'+n++,sec.querySelector('svg')?'Đồ thị / hình minh họa':'Xem chi tiết')}}
 if(page===2){for(const sec of [...root.querySelectorAll(':scope > section')].slice(1)){fold28([sec],sec.querySelector('h2')?.textContent||'Kết quả đo',ctx+':lab:'+sec.textContent.slice(0,50),'Xem chi tiết')}const guide=root.querySelector('.labgrid > .guide');if(guide){const diagram=guide.querySelector('.diagram');if(diagram)fold28([diagram],'Hình minh họa thao tác',ctx+':diagram');}}
 const panels=[...root.querySelectorAll(':scope > .fold28')];if(!panels.length)return;
 const overview=document.createElement('div');overview.className='overview28';const heading=document.createElement('strong');heading.textContent='Danh mục nội dung · '+panels.length+' mục';overview.append(heading);
 const p=document.createElement('p');p.textContent='Chọn mục cần xem. Các bảng, đồ thị và phương pháp được thu gọn mặc định.';overview.append(p);
 if(analysis){const a=all(),r0=a.filter(s=>positive(s.r0)).length,t1=a.filter(s=>s.tn1.some(v=>positive(v.peak)&&positive(v.after))).length,t2=a.filter(s=>tn2calc(s)).length;const status=document.createElement('p');status.className='status28';status.textContent=`Tiến độ toàn bộ: TN0 ${r0}/21 · TN1 có cặp đo ${t1}/21 · TN2 đủ dải chung ${t2}/21`;overview.append(status)}
 const bar=document.createElement('div');bar.className='bar';for(const [label,value] of [['Mở tất cả',true],['Thu gọn tất cả',false]]){const b=document.createElement('button');b.textContent=label;b.onclick=()=>root.querySelectorAll('.fold28').forEach(d=>{d.open=value;open28.set(d.dataset.fold,value)});bar.append(b)}overview.append(bar);panels[0].before(overview);
}
const render28base=render;render=function(){document.querySelectorAll('#view .fold28').forEach(d=>open28.set(d.dataset.fold,d.open));render28base();compact28()};
