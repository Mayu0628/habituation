document.getElementById('make').addEventListener('click', function() {
    const yearInput = document.getElementById('year');
    const monthInput = document.getElementById('month');
    const dayInput = document.getElementById('day');
    const calendarTable = document.getElementById('calendar');

    const year = parseInt(yearInput.value);
    const month = parseInt(monthInput.value);
    const day = parseInt(dayInput.value);

    if (!(1583 <= year && year <= 9999) || !(1 <= month && month <= 12) || !(1 <= day && day <= 31)) {
    alert('年月日を正しく入力してください。');
    return;
    }

    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay();

    let calendarHTML = '';
    let dayCount = 1;

    // 曜日の行を追加
    calendarHTML += '<tr>';
    const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

    for (let i = 0; i < 7; i++) {
      calendarHTML += '<th>' + daysOfWeek[i] + '</th>';
    }

    calendarHTML += '</tr>';

    // カレンダーの日付部分の生成
    for (let row = 0; row < 6; row++) {
      calendarHTML += '<tr>';

      for (let col = 0; col < 7; col++) {
        if (dayCount > daysInMonth) {
          calendarHTML += '<td></td>';
        } else {
          if (row === 0 && col < firstDay) {
            calendarHTML += '<td></td>';
          } else {
            let cellClass = '';

            if (dayCount === day) {
              cellClass = 'highlight';
            }

            calendarHTML += '<td class="' + cellClass + '">' + dayCount + '</td>';
            dayCount++;
          }
        }
      }

      calendarHTML += '</tr>';
    }

    calendarTable.innerHTML = calendarHTML;
  });

