// const recyclebinIcon = document.getElementById("RB");
// const recycleWindow = document.getElementById("recycleWindow");
// const recycleContent = document.getElementById("recycleContent");

// // Show Recycle Bin Window
// recyclebinIcon.addEventListener("click", () => {
//     recycleWindow.style.display = "block";
//     renderRecycleBin();
//     setTimeout(() => {
//         recycleWindow.classList.remove("scale-0", "opacity-0");
//         recycleWindow.classList.add("scale-100", "opacity-100");
//     }, 10);
// });

// // Close Recycle Bin Window
// function closeRecycleBin() {
//     recycleWindow.classList.remove("scale-100", "opacity-100");
//     recycleWindow.classList.add("scale-0", "opacity-0");
//     setTimeout(() => {
//         recycleWindow.style.display = "none";
//     }, 300);
// }

// // Render Recycle Bin Items from LocalStorage
// function renderRecycleBin() {
//     const recycleData = JSON.parse(localStorage.getItem("recycleBin")) || [];
//     recycleContent.innerHTML = "";

//     if (recycleData.length === 0) {
//         recycleContent.innerHTML = `<div class="col-span-full text-center text-gray-500">Recycle Bin is empty</div>`;
//         return;
//     }

//     recycleData.forEach(item => {
//         const div = document.createElement("div");
//         div.className = "text-center p-2 hover:bg-gray-100 rounded shadow-[0_2px_8px_rgba(10,10,10,0.14)]";
        
//         div.innerHTML = `
//             <div class="text-4xl">🗑️</div>
//             <div class="font-medium">${item.name}</div>
//             <div class="text-xs text-gray-500">Deleted Item</div>
//         `;

//         recycleContent.appendChild(div);
//     });
// }
