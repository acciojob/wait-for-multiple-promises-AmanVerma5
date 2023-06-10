//your JS code here. If required.
function randomTime() {
	let time = Math.random() * 2 + 1;
	return time * 1000;
  }
  
  let prom1 = new Promise((resolve) => {
	const startTime = new Date().getTime();
	setTimeout(() => {
	  const endTime = new Date().getTime();
	  const elapsedTime = endTime - startTime;
	  resolve({ promise: "Promise 1", time: elapsedTime });
	}, randomTime());
  });
  
  let prom2 = new Promise((resolve) => {
	const startTime = new Date().getTime();
	setTimeout(() => {
	  const endTime = new Date().getTime();
	  const elapsedTime = endTime - startTime;
	  resolve({ promise: "Promise 2", time: elapsedTime });
	}, randomTime());
  });
  
  let prom3 = new Promise((resolve) => {
	const startTime = new Date().getTime();
	setTimeout(() => {
	  const endTime = new Date().getTime();
	  const elapsedTime = endTime - startTime;
	  resolve({ promise: "Promise 3", time: elapsedTime });
	}, randomTime());
  });
  
  let prom = [prom1, prom2, prom3];
  let x = Promise.all(prom);
  
  x.then((data) => {
	let tbody=document.getElementById("output");
	for(let i=0;i<data.length;i++){
	let inner=document.createElement("tr");
	inner.innerHTML=`<td>${data[i].promise}</td>
					 <td>${data[i].time}</td>`;
	tbody.append(inner);				 
	}
  });