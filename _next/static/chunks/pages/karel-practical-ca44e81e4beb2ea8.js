(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{6402:(e,s,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/karel-practical",function(){return a(999)}])},999:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>c});var l=a(5893),n=a(7294);let t=()=>{let[e,s]=(0,n.useState)(!1),[a,t]=(0,n.useState)(!1),[r,i]=(0,n.useState)(!1),[c,d]=(0,n.useState)(""),[o,m]=(0,n.useState)(null),h=(e,s,a)=>{navigator.clipboard.writeText(e),m("".concat(s,"-").concat(a)),setTimeout(()=>m(null),1e3)};return(0,n.useEffect)(()=>{let e=setTimeout(()=>{t(!0),setTimeout(()=>t(!1),4e3)},1e3),s=setInterval(()=>{.2>Math.random()&&(i(!0),setTimeout(()=>i(!1),1e3))},4e3),a=setInterval(()=>{.5>Math.random()&&(t(!0),setTimeout(()=>t(!1),4e3))},2e3);return()=>{clearTimeout(e),clearInterval(s),clearInterval(a)}},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center",children:[(0,l.jsxs)("div",{className:"\n          bg-white px-3 py-2 rounded-lg shadow-lg mb-2 \n          transition-opacity duration-300\n          ".concat(a?"opacity-100":"opacity-0","\n          relative\n        "),children:[(0,l.jsx)("div",{className:"absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white"}),"Click me for help!"]}),(0,l.jsx)("button",{onClick:()=>s(!0),className:"\n            w-16 h-16 rounded-full \n            transition-transform duration-300\n            ".concat(r?"animate-spin":"","\n          "),children:(0,l.jsx)("img",{src:"/gr8-karel/images/dog-sprite.png",alt:"Karel Helper",className:"w-full h-full"})})]}),e&&(0,l.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:(0,l.jsxs)("div",{className:"relative w-full max-w-2xl",children:[(0,l.jsx)("button",{onClick:()=>s(!1),className:"absolute -top-10 right-0 bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600",children:"Close"}),(0,l.jsxs)("div",{className:"bg-white p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto",children:[(0,l.jsx)("div",{className:"flex justify-between items-center mb-4",children:(0,l.jsx)("h3",{className:"text-xl font-bold",children:"Karel Code Helper"})}),(0,l.jsx)("div",{className:"space-y-6",children:Object.entries({basic:[{name:"move()",desc:"Move Karel forward one space"},{name:"turnLeft()",desc:"Turn Karel 90\xb0 to the left"},{name:"putBall()",desc:"Put a tennis ball down"},{name:"takeBall()",desc:"Pick up a tennis ball"}],conditions:[{name:"frontIsClear()",desc:"Check if front is clear"},{name:"frontIsBlocked()",desc:"Check if front is blocked"},{name:"ballsPresent()",desc:"Check if balls are present"},{name:"noBallsPresent()",desc:"Check if no balls present"},{name:"notFacingNorth()",desc:"Check if Karel is not facing north"},{name:"notFacingWest()",desc:"Check if Karel is not facing west"}],"Control Structures":[{name:"if (condition) {\n        // code\n    } else {\n        // code\n    }",desc:"Execute different code based on a condition"}],loops:[{name:"while (condition) {\n  // code\n}",desc:"Repeat while condition is true"},{name:"for (let i = 0; i < n; i++) {\n  // code\n}",desc:"Repeat n times"}],functions:[{name:"function name() {\n  // code\n}",desc:"Create a new function"}]}).map(e=>{let[s,a]=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",{className:"font-semibold mb-2",children:s.charAt(0).toUpperCase()+s.slice(1)}),(0,l.jsx)("div",{className:"grid grid-cols-2 gap-2",children:a.map((e,a)=>(0,l.jsxs)("div",{className:"p-2 bg-gray-50 rounded relative",children:[(0,l.jsx)("pre",{className:"font-mono text-purple-600 cursor-grab",onClick:()=>h(e.name,s,a),children:e.name}),(0,l.jsx)("span",{className:"text-sm text-gray-600",children:e.desc}),o==="".concat(s,"-").concat(a)&&(0,l.jsx)("div",{className:"absolute top-1 right-1 bg-green-500 text-white text-xs px-2 py-1 rounded",children:"Copied! "})]},a))})]},s)})})]})]})})]})};var r=a(5675),i=a.n(r);function c(){let[e,s]=(0,n.useState)({name:"",class:""}),[a,r]=(0,n.useState)({1:"",2:"",3:"",4:""}),[c,d]=(0,n.useState)(!1),o={width:400,height:200},m="function start() {\n    // Write your code here\n    // Remember to call the functions you create\n  }\n\n  // Create your helper functions below\n  ";return(0,l.jsxs)("div",{className:"min-h-screen bg-gray-200",children:[(0,l.jsx)("div",{className:"py-8 bg-gray-200 mb-4",children:(0,l.jsx)("h1",{className:"text-3xl font-bold text-center",children:"Grade 8 Karel Assessment"})}),(0,l.jsxs)("div",{className:"max-w-6xl mx-auto px-4",children:[(0,l.jsxs)("div",{className:"min-h-screen bg-gray-50 py-8",children:[(0,l.jsx)(t,{}),(0,l.jsxs)("div",{className:"px-8",children:[(0,l.jsxs)("div",{className:"max-w-4xl mx-auto px-4",children:[(0,l.jsx)("h1",{className:"text-2xl font-bold mb-8",children:"Section B - Practical (20 marks)"}),(0,l.jsx)("div",{className:"bg-white rounded-lg shadow-sm p-6 mb-6",children:(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,l.jsx)("input",{className:"p-2 border rounded",placeholder:"Full Name",value:e.name,onChange:a=>s({...e,name:a.target.value})}),(0,l.jsx)("input",{className:"p-2 border rounded",placeholder:"Class (e.g. 8AC)",value:e.class,onChange:a=>s({...e,class:a.target.value})})]})})]}),(0,l.jsxs)("div",{className:"bg-white rounded-lg shadow-sm p-6 mb-6",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"1. Row and Back (5 marks)"}),(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"font-semibold mb-2",children:"Start World:"}),(0,l.jsx)(i(),{src:"/gr8-karel/images/p1-start.png",alt:"Row and Back start",...o,className:"border"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"font-semibold mb-2",children:"End World:"}),(0,l.jsx)(i(),{src:"/gr8-karel/images/p1-end.png",alt:"Row and Back end",...o,className:"border"})]})]}),(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Requirements:"}),(0,l.jsxs)("ul",{className:"list-disc ml-5",children:[(0,l.jsx)("li",{children:"Karel starts at (1,1) facing East"}),(0,l.jsx)("li",{children:"Place one ball on every position in the first row"}),(0,l.jsx)("li",{children:"Return to starting position"}),(0,l.jsx)("li",{children:"End facing East"})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Guide:"}),(0,l.jsxs)("ul",{className:"list-disc ml-5",children:[(0,l.jsx)("li",{children:"Create a function to put balls while moving"}),(0,l.jsx)("li",{children:"Create a function to turn around and come back"}),(0,l.jsx)("li",{children:"Make sure to put a ball on the last square too"})]})]}),(0,l.jsx)("textarea",{className:"w-full mt-4 p-3 border rounded font-mono",rows:10,value:m,onChange:e=>r({...a,1:e.target.value})})]})]}),(0,l.jsxs)("div",{className:"bg-white rounded-lg shadow-sm p-6 mb-6",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"2. Opposite Squares (5 marks)"}),(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"font-semibold mb-2",children:"Start World:"}),(0,l.jsx)(i(),{src:"/gr8-karel/images/p2-start.png",alt:"Opposite Squares start",...o,className:"border"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"font-semibold mb-2",children:"End World:"}),(0,l.jsx)(i(),{src:"/gr8-karel/images/p2-end.png",alt:"Opposite Squares start",width:400,height:200,className:"border"})]})]}),(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Requirements:"}),(0,l.jsxs)("ul",{className:"list-disc ml-5",children:[(0,l.jsx)("li",{children:"World is at least 4 columns wide and 2 rows high"}),(0,l.jsx)("li",{children:"Draw a square at both ends of the world"}),(0,l.jsx)("li",{children:"Each square should be outlined with balls"}),(0,l.jsx)("li",{children:"End facing East at bottom right corner"})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Guide:"}),(0,l.jsxs)("ul",{className:"list-disc ml-5",children:[(0,l.jsx)("li",{children:"Create a function to build one square using a loop"}),(0,l.jsx)("li",{children:"Use move() and turnLeft() to draw square sides"}),(0,l.jsx)("li",{children:"Move to the other end of the world for second square"})]})]}),(0,l.jsx)("textarea",{className:"w-full mt-4 p-3 border rounded font-mono",rows:10,value:m,onChange:e=>r({...a,2:e.target.value})})]})]}),(0,l.jsxs)("div",{className:"bg-white rounded-lg shadow-sm p-6 mb-6",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"3. K for Karel (5 marks)"}),(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"font-semibold mb-2",children:"Start World:"}),(0,l.jsx)(i(),{src:"/gr8-karel/images/p3-start.png",alt:"K for Karel start",...o,className:"border"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"font-semibold mb-2",children:"End World:"}),(0,l.jsx)(i(),{src:"/gr8-karel/images/p3-end.png",alt:"K for Karel end",...o,className:"border"})]})]}),(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Requirements:"}),(0,l.jsxs)("ul",{className:"list-disc ml-5",children:[(0,l.jsx)("li",{children:"In a 10x10 world starting from bottom left"}),(0,l.jsx)("li",{children:"Create letter 'K' using tennis balls"}),(0,l.jsx)("li",{children:"Draw vertical line first, then diagonal branches"}),(0,l.jsx)("li",{children:"Return to starting position facing East"})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Guide:"}),(0,l.jsxs)("ul",{className:"list-disc ml-5",children:[(0,l.jsx)("li",{children:"Create a function to draw the vertical line"}),(0,l.jsx)("li",{children:"Make functions for upper and lower diagonal lines"}),(0,l.jsx)("li",{children:"Use putBall() at each position of the K"})]})]}),(0,l.jsx)("textarea",{className:"w-full mt-4 p-3 border rounded font-mono",rows:10,value:m,onChange:e=>r({...a,3:e.target.value})})]})]}),(0,l.jsxs)("div",{className:"bg-white rounded-lg shadow-sm p-6 mb-6",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"4. Target Pattern (5 marks)"}),(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"font-semibold mb-2",children:"Start World:"}),(0,l.jsx)(i(),{src:"/gr8-karel/images/p4-start.png",alt:"Target Pattern start",...o,className:"border"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"font-semibold mb-2",children:"End World:"}),(0,l.jsx)(i(),{src:"/gr8-karel/images/p4-end.png",alt:"Target Pattern start",...o,className:"border"})]})]}),(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Requirements:"}),(0,l.jsxs)("ul",{className:"list-disc ml-5",children:[(0,l.jsx)("li",{children:"Find the ball in the world"}),(0,l.jsx)("li",{children:"Create cross pattern on that ball's row and column"}),(0,l.jsx)("li",{children:"Fill entire row and column with balls"}),(0,l.jsx)("li",{children:"End facing East at target ball position"})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Guide:"}),(0,l.jsxs)("ul",{className:"list-disc ml-5",children:[(0,l.jsx)("li",{children:"Make a function to search each row until ball is found"}),(0,l.jsx)("li",{children:"Create separate functions for filling row and column"}),(0,l.jsx)("li",{children:"Use while loops with frontIsClear() to move"})]})]}),(0,l.jsx)("textarea",{className:"w-full mt-4 p-3 border rounded font-mono",rows:10,value:m,onChange:e=>r({...a,4:e.target.value})})]})]})]})]}),(0,l.jsx)("button",{onClick:()=>{let s="https://docs.google.com/forms/d/e/1FAIpQLSdeysBl-63gNCNOT8RD01_Bcood6Z3Gq-KV8W6zNZSuBFlatA/formResponse?entry.192175351=".concat(e.name,"&entry.680216375=").concat(e.class,"&entry.76138761=").concat(a[1],"&entry.2036080317=").concat(a[2],"&entry.691546682=").concat(a[3],"&entry.428554405=").concat(a[4]),l=document.createElement("iframe");l.style.display="none",l.src=s,document.body.appendChild(l),d(!0)},className:"bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600",children:"Submit Solutions"})]}),c&&(0,l.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:(0,l.jsxs)("div",{className:"bg-white p-6 rounded-lg",children:[(0,l.jsx)("h3",{className:"text-xl mb-4",children:"Your exam has been submitted, well done!"}),(0,l.jsx)("button",{onClick:()=>d(!1),className:"bg-blue-500 text-white px-4 py-2 rounded",children:"Close"})]})})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[675,888,774,179],()=>s(6402)),_N_E=e.O()}]);