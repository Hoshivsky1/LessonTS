
//!Enum =================================
const enum St {
    ADMIN = 1,
    BABY = 2
}

enum Status {
    Published = 'published',
    Draft = 'draft',
    Deleted = 'deleted'
}


async function getFaqs(req: {
    topicId: number;
    status: Status
}): Promise<{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: Status;
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}

//!Tuples Array=================================
const skill: [number, string, ...boolean[]] = [1, 'mAX', true, true, false] 
const sk: string[] = ['font', 'color']

//!Object =================================
let info: {
    firsname: string,
    surname: string,
    age: number,
    skills: {
        dev: boolean,
        figma: boolean
    }
} = {
    firsname: 'Maxim',
    surname: 'Hoshivskyi',
    age: 18,
    skills: {
        dev: true,
        figma: true
    }
} 

//!Types Function==============================
function getName(name: string, surname: string): string {
    return name + surname;
}