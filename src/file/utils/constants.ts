export const FILE_FONTS = {
  Courier: {
    normal: 'Courier',
    bold: 'Courier-Bold',
    italics: 'Courier-Oblique',
    bolditalics: 'Courier-BoldOblique',
  },
  Helvetica: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold',
    italics: 'Helvetica-Oblique',
    bolditalics: 'Helvetica-BoldOblique',
  },
  Times: {
    normal: 'Times-Roman',
    bold: 'Times-Bold',
    italics: 'Times-Italic',
    bolditalics: 'Times-BoldItalic',
  },
  Symbol: {
    normal: 'Symbol',
  },
  ZapfDingbats: {
    normal: 'ZapfDingbats',
  },
};

export const DOC_DEFINITION = {
  content: [
    {
      image:
        'data:image/png;base64,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',
      width: 200,
      height: 30,
      margin: [0, 0, 0, 40],
    },
    {
      text: 'Wesley Mika Milonovich',
      style: 'header',
    },
    {
      style: 'tableExample',
      table: {
        widths: [120, 120, 120],
        headerRows: 1,
        body: [
          [
            { text: 'Location Zip Code', style: 'contactInfoHeaders' },
            { text: 'Phone', style: 'contactInfoHeaders' },
            { text: 'Email', style: 'contactInfoHeaders' },
          ],
          [
            { text: '10 Mi Away (60060)', style: 'contactInfoData' },
            { text: '(224) 123 12 1233', style: 'contactInfoData' },
            { text: 'wesleyMika@test.com', style: 'contactInfoData' },
          ],
        ],
      },
      layout: 'noBorders',
    },
    {
      style: 'tableExample',
      table: {
        headerRows: 1,
        widths: ['*', '*'],
        body: [
          [
            {
              stack: [
                // code for first column
                { text: 'Summary', style: 'resumeTitles' },
                "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                { text: 'Work Experience', style: 'workExperienceMainTitle' },
                { text: 'Experience #1', style: 'workExperienceTitles' },
                'experience #1 desc',
                { text: 'Experience #2', style: 'workExperienceTitles' },
                'experience #2 desc',
                { text: 'Experience #3', style: 'workExperienceTitles' },
                'experience #3 desc',
              ],
            },
            {
              stack: [
                // code for first column
                { text: 'Education & Training', style: 'resumeTitles' },
                'Summary Text',
                {
                  text: 'Skills & Technologies',
                  style: 'workExperienceMainTitle',
                },
                { text: 'Experience #1', style: 'workExperienceTitles' },
                'experience #1 desc',
                { text: 'Experience #2', style: 'workExperienceTitles' },
                'experience #2 desc',
                { text: 'Experience #3', style: 'workExperienceTitles' },
                'experience #3 desc',
              ],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: function (i, node) {
          return i === 0 || i === node.table.body.length ? 2 : 1;
        },
        vLineWidth: function (i, node) {
          return i === 0 || i === node.table.widths.length ? 2 : 1;
        },
        hLineColor: function (i, node) {
          return i === 0 || i === node.table.body.length ? 'white' : 'white';
        },
        vLineColor: function (i, node) {
          return i === 0 || i === node.table.widths.length ? 'white' : 'gray';
        },
      },
    },
  ],
  styles: {
    header: {
      fontSize: 35,
      font: 'Courier',
    },
    tableExample: {
      font: 'Helvetica',
      margin: [0, 5, 0, 15],
    },
    contactInfoHeaders: {
      font: 'Helvetica',
      fontSize: 8,
      margin: [0, 10, 0, 0],
    },
    contactInfoData: {
      font: 'Helvetica',
      fontSize: 12,
    },
    resumeTitles: {
      font: 'Helvetica',
      bold: true,
      fontSize: 15,
      margin: [0, 10, 0, 10],
    },
    workExperienceMainTitle: {
      font: 'Helvetica',
      bold: true,
      fontSize: 15,
      margin: [0, 40, 0, 5],
    },
    workExperienceTitles: {
      font: 'Helvetica',
      bold: true,
      fontSize: 13,
      color: 'grey',
      margin: [0, 20, 0, 5],
    },
    workExperienceDesc: {
      margin: [0, 0, 0, 5],
    },
  },
};
