interface CardData {
    id: string;
    title: string;
    recommend?: string;
    descriptions?: string[];

    serviceList: ServiceList;
    courseTimeList: CourseTimeList;

    allCourseTime: string;
    allCourseDays: string;
    coursePayment: number;
    coursePrePayment: number;
}


interface ServiceList {
    id: string;
    title?: string;
    list: string[]
}

interface CourseTimeList {
    title: string;
    list: CourseTimeBlock[]
}

interface CourseTimeBlock {
    dayTitle: string;
    courseItems: string[]
}

interface ServiceListData {
    title: string;
    cardList: CardData[]
}



