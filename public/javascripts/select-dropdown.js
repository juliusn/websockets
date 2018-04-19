document.querySelectorAll('.select-dropdown').forEach((dd) => {
  const select = dd.querySelector('select');
  emoji.map((e, i) => {
    const opt = document.createElement('option');
    opt.value = i + 1;
    opt.innerHTML = e;
    select.appendChild(opt);
  });
  const header = document.createElement('div');
  header.classList.add('select-header');
  header.innerHTML = select.options[0].innerHTML;
  const selected = document.createElement('div');
  selected.classList.add('select-selected');
  header.appendChild(selected);
  header.addEventListener('click', (ev) => {
    ev.stopPropagation();
    header.nextSibling.classList.toggle('select-hide');
    header.classList.toggle('select-arrow-active');
  });
  dd.appendChild(header);
  // dd.style.width = dd.offsetWidth + 20 + 'px';
  const selectItems = document.createElement('div');
  const options = Array.from(select.children).filter((el, i) => {
    return el.nodeName === 'OPTION' && i !== 0;
  });
  selectItems.classList.add('select-items', 'select-hide');
  const columns = Math.floor(Math.sqrt(options.length));
  selectItems.setAttribute('style',
      `grid-template-columns: repeat(${columns}, 1fr)`);
  options.forEach((opt, i) => {
    const selElmnt = document.createElement('div');
    selElmnt.addEventListener('click', (ev) => {
      ev.stopPropagation();
      if (select.selectedIndex === i) {
        select.selectedIndex = 0;
        selected.innerHTML = '';
        selElmnt.classList.remove('select-selected');
        return;
      }
      select.selectedIndex = i;
      selected.innerHTML = selElmnt.innerHTML;
      document.querySelectorAll('.select-items div.select-selected').
          forEach((item) => {
            item.classList.remove('select-selected');
          });
      selElmnt.classList.add('select-selected');
      header.click();
    });
    const emoji = document.createElement('span');
    emoji.classList.add('emoji');
    emoji.innerHTML = opt.innerHTML;
    selElmnt.appendChild(emoji);
    selectItems.appendChild(selElmnt);
  });
  dd.appendChild(selectItems);
});
