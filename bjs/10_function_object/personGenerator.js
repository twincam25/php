const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Анна",
            "id_2": "Таисия",
            "id_3": "Татьяна",
            "id_4": "Елена",
            "id_5": "Елизавета",
            "id_6": "Александра",
            "id_7": "Кристина",
            "id_8": "Евгения",
            "id_9": "Ольга",
            "id_10": "Анастасия"
        }
    }`,

    middleNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Антонович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Павлович",
            "id_5": "Валентинович",
            "id_6": "Евгеньевич",
            "id_7": "Андреевич",
            "id_8": "Сергеевич",
            "id_9": "Владимирович",
            "id_10": "Александрович"
        }
    }`,

    middleNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Антоновна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Павловна",
            "id_5": "Валентиновна",
            "id_6": "Евгеньевна",
            "id_7": "Андреевна",
            "id_8": "Сергеевна",
            "id_9": "Владимировна",
            "id_10": "Александровна"
        }
    }`,

    townJson: `{
        "count": 10,
        "list": {     
            "id_1": "Калининград",
            "id_2": "Владивосток",
            "id_3": "Улан-Удэ",
            "id_4": "Чита",
            "id_5": "Хабаровск",
            "id_6": "Новосибирск",
            "id_7": "Омск",
            "id_8": "Томск",
            "id_9": "Светлогорск",
            "id_10": "Черняховск"
        }
    }`,

    profMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "менеджером",
            "id_2": "сантехником",
            "id_3": "продавцом",
            "id_4": "юристом",
            "id_5": "турагентом",
            "id_6": "доктором",
            "id_7": "рабочим",
            "id_8": "официантом",
            "id_9": "механиком",
            "id_10": "программистом"
        }
    }`,

    profFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "акушеркой",
            "id_2": "домработницей",
            "id_3": "фотомоделью",
            "id_4": "гувернанткой",
            "id_5": "балериной",
            "id_6": "официанткой",
            "id_7": "радиоведущей",
            "id_8": "телеграфисткой",
            "id_9": "учительницей",
            "id_10": "кассиром"
        }
    }`,

    monthNameJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min),

        randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(1, obj.count)}`;
        return obj.list[prop];
    },

    randomFirstName: function () {

        let fn;

        if (this.person.gender === this.GENDER_MALE) {
            fn = this.randomValue(this.firstNameMaleJson);
        } else {
            fn = this.randomValue(this.firstNameFemaleJson);
        }

        return fn;
    },

    randomMiddleName: function () {

        let mn;

        if (this.person.gender === this.GENDER_MALE) {
            mn = this.randomValue(this.middleNameMaleJson);
        } else {
            mn = this.randomValue(this.middleNameFemaleJson);
        }

        return mn;
    },

    randomSurname: function () {

        let sn = this.randomValue(this.surnameJson);

        if (this.person.gender === this.GENDER_FEMALE) {
            sn = sn + 'а';
        }

        return sn;
    },

    randomGender: function () {

        let pg = this.randomIntNumber(1, 2);

        if (pg == 1) {
            return this.GENDER_MALE;
        } else {
            return this.GENDER_FEMALE
        }

    },

    randomBirthDay: function () {
        let dateNow = new Date();

        let dt = new Date(this.randomIntNumber(1930, dateNow.getFullYear()), this.randomIntNumber(1, 12), this.randomIntNumber(1, 31));

        return dt;
    },

    monthToName: function (month) {
        const monthNameArray = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        return monthNameArray[month];
    },

    randomnHistory: function () {
        let dateNow = new Date();
        let ds = this.person.firstName + ' родил';
     
        if (this.person.gender === this.GENDER_FEMALE) {
            ds = ds + 'ась';
        } else {
            ds = ds + 'ся';
        }
        ds = ds + ' ' + this.person.birthDay.getDate() + ' ' + this.monthToName(this.person.birthDay.getMonth()) + ' ' + this.person.yearOfBirthDay + ' в городе ' + this.randomValue(this.townJson) + '.';
        if ((this.person.yearOfBirthDay + 17) > dateNow.getFullYear()) {
            return ds;
        }

        ds = ds + ' В ' + (this.person.yearOfBirthDay + 17) + ' году закончил';
        if (this.person.gender === this.GENDER_FEMALE) {
            ds = ds + 'а';
        }
        ds = ds + ' школу № ' + this.randomIntNumber(1, 5000) + '.';

        if ((this.person.yearOfBirthDay + 18) > dateNow.getFullYear()) {
            return ds;
        }
    
        ds = ds + ' С ' + (this.person.yearOfBirthDay + 18) + ' года работал';
        if (this.person.gender === this.GENDER_FEMALE) {
            ds = ds + 'а ' + this.randomValue(this.profFemaleJson) + '.';
        } else {
            ds = ds + ' ' + this.randomValue(this.profMaleJson) + '.';
        }

        return ds;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.middleName = this.randomMiddleName();
        this.person.secondName = this.randomSurname();
        this.person.birthDay = this.randomBirthDay();
        this.person.yearOfBirthDay = this.person.birthDay.getFullYear();
        this.person.personHistory = this.randomnHistory();

        return this.person;

    }
};