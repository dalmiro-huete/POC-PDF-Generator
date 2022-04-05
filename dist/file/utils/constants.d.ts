export declare const FILE_FONTS: {
    Courier: {
        normal: string;
        bold: string;
        italics: string;
        bolditalics: string;
    };
    Helvetica: {
        normal: string;
        bold: string;
        italics: string;
        bolditalics: string;
    };
    Times: {
        normal: string;
        bold: string;
        italics: string;
        bolditalics: string;
    };
    Symbol: {
        normal: string;
    };
    ZapfDingbats: {
        normal: string;
    };
};
export declare const DOC_DEFINITION: {
    content: ({
        image: string;
        width: number;
        height: number;
        margin: number[];
        text?: undefined;
        style?: undefined;
        table?: undefined;
        layout?: undefined;
    } | {
        text: string;
        style: string;
        image?: undefined;
        width?: undefined;
        height?: undefined;
        margin?: undefined;
        table?: undefined;
        layout?: undefined;
    } | {
        style: string;
        table: {
            widths: number[];
            headerRows: number;
            body: {
                text: string;
                style: string;
            }[][];
        };
        layout: string;
        image?: undefined;
        width?: undefined;
        height?: undefined;
        margin?: undefined;
        text?: undefined;
    } | {
        style: string;
        table: {
            headerRows: number;
            widths: string[];
            body: {
                stack: (string | {
                    text: string;
                    style: string;
                })[];
            }[][];
        };
        layout: {
            hLineWidth: (i: any, node: any) => 1 | 2;
            vLineWidth: (i: any, node: any) => 1 | 2;
            hLineColor: (i: any, node: any) => string;
            vLineColor: (i: any, node: any) => "white" | "gray";
        };
        image?: undefined;
        width?: undefined;
        height?: undefined;
        margin?: undefined;
        text?: undefined;
    })[];
    styles: {
        header: {
            fontSize: number;
            font: string;
        };
        tableExample: {
            font: string;
            margin: number[];
        };
        contactInfoHeaders: {
            font: string;
            fontSize: number;
            margin: number[];
        };
        contactInfoData: {
            font: string;
            fontSize: number;
        };
        resumeTitles: {
            font: string;
            bold: boolean;
            fontSize: number;
            margin: number[];
        };
        workExperienceMainTitle: {
            font: string;
            bold: boolean;
            fontSize: number;
            margin: number[];
        };
        workExperienceTitles: {
            font: string;
            bold: boolean;
            fontSize: number;
            color: string;
            margin: number[];
        };
        workExperienceDesc: {
            margin: number[];
        };
    };
};
