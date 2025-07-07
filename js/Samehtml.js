function allsame() {
    let val = document.querySelectorAll('.samesame')
    let samehtml = `
    <aside class="w-56 bg-gray-50 p-3 overflow-y-auto bg-[rgba(245,245,251,1)]">
    <h2 class="font-semibold text-gray-600 mb-2">Quick access</h2>
    <ul class="space-y-1">
    <li class="flex items-center gap-2 p-1 hover:bg-gray-200 rounded cursor-pointer">📁 Desktop
    </li>
    <li class="flex items-center gap-2 p-1 hover:bg-gray-200 rounded cursor-pointer">📁
    Downloads</li>
    <li class="flex items-center gap-2 p-1 hover:bg-gray-200 rounded cursor-pointer">📁
    Documents</li>
    <li class="flex items-center gap-2 p-1 hover:bg-gray-200 rounded cursor-pointer">📁 Pictures
    </li>
    <li class="flex items-center gap-2 p-1 hover:bg-gray-200 rounded cursor-pointer">📁 Music
    </li>
                            <li class="flex items-center gap-2 p-1 hover:bg-gray-200 rounded cursor-pointer">📁 Videos
                            </li>
                            <hr class="my-2 border-gray-300" />
                            <li class="ml-3 text-sm hover:bg-gray-200 p-1 rounded cursor-pointer">📁 Screenshots</li>
                            <li class="ml-3 text-sm hover:bg-gray-200 p-1 rounded cursor-pointer">📁 windowOS</li>
                            <li class="ml-3 text-sm hover:bg-gray-200 p-1 rounded cursor-pointer">📁 icons</li>
                            <li class="ml-3 text-sm hover:bg-gray-200 p-1 rounded cursor-pointer">📁 js</li>
                            </ul>
                            </aside>
                            `;
    val.forEach(item => {
        item.classList.remove('hidden')
        item.innerHTML = samehtml

    })
}
