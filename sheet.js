
const bracket_data = [
  [14, 60000, 13000, , 5, "=IF(E1 >= 3,(E1 - 2) * 5000,1000)","=INT(E1)"],
  [13, 55000, 12000, , 10, "=INT((F1 * .9) + MIN((E2 - 1) * 1000, 13000))", "=IF(F2 >= 5000, MIN(INT(F2/5000) + 2, 14), 2)"],
  [12, 50000, 11000, , 10, ,""],
  [11, 45000, 10000, , 10],
  [10, 40000, 9000, , 10],
  [9, 35000, 8000, , 10],
  [8, 30000, 7000, , 10],
  [7, 25000, 6000, , 10],
  [6, 20000, 5000, , 10],
  [5, 15000, 4000, , 10],
  [4, 10000, 3000, , 7],
  [3, 5000, 2000, , 7],
  [2, 2000, 1000, , 7],
  [1, , 800],
  [],
  [],
];

for (let i = 2; i < 13; i++) {
    bracket_data[i][5] = bracket_data[1][5].replaceAll('F1', 'F' + i).replaceAll('E2', 'E' + (i + 1))
    bracket_data[i][6] = bracket_data[1][6].replaceAll('F2', 'F' + (i + 1))
}

const hfInstance = HyperFormula.buildEmpty({
    licenseKey: 'gpl-v3',
});

const bracket_container = document.getElementById('ranker');
const hot1 = new Handsontable(bracket_container, {
  data: bracket_data,
  formulas: {
    engine: hfInstance,
  },
  colHeaders: ['', 'Req RP', 'Max Gain', '', 'Bracket', 'RP', 'Standing'],
  height: 'auto',
  licenseKey: 'non-commercial-and-evaluation',
  fillHandle: {
   autoInsertRow: true
    },
    customBorders: [
      {
        range: {
          from: {
            row: 0,
            col: 4
          },
          to: {
            row: 13,
            col: 4
          }
        },
        top: {
          width: 2,
          color: 'magenta'
        },
        left: {
          width: 2,
          color: 'orange'
        },
        bottom: {
          width: 2,
          color: 'red'
        },
        right: {
          width: 2,
          color: '#5292F7'
        }
      }
    ]
});
