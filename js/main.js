let defualtUsersArray = [
    {Id: 1,name: "محمد محمدی",codeMelli: "0123456789", city: "همدان", field: "کودک", addres: "همدان خیابان بوعلی", password: "12341234", idDoctor: true ,apoints:[]},
    {Id: 2,name: "علی علوی",codeMelli: "0123456799", city: "همدان", field: "چشم", addres: "همدان خیابان خواجه رشید", password: "12341234", idDoctor: true ,apoints:[]},
    {Id: 3,name: "امیر امیری",codeMelli: "0123456999", city: "تهران", field: "ارتوپد", addres: "تهران بلوار ولیعصر", password: "12341234", idDoctor: true ,apoints:[]},
    {Id: 4,name: "جواد جوادی",codeMelli: "0123459999", city: "تهران", field: "", addres: "", password: "12344321", idDoctor: false ,apoints:[]},
    {Id: 5,name: "مجید مجیدی",codeMelli: "1113338882", city: "اصفهان", field: "چشم", addres: "", password: "12341234", idDoctor: true ,apoints:[]},
    {Id: 6,name: "وحید وحیدی",codeMelli: "1122334455", city: "همدان", field: "گوارش", addres: "", password: "12341234", idDoctor: true ,apoints:[]},
    {Id: 7,name: "جمشید جمشیدی",codeMelli: "1177442255", city: "مشهد", field: "روانپزشک", addres: "", password: "12341234", idDoctor: true ,apoints:[]},
    {Id: 8,name: "حمید حمیدی",codeMelli: "0147852369", city: "همدان", field: "", addres: "", password: "12344321", idDoctor: false ,apoints:[]}
]
let apointmentList = [
    {doctor: "علی علوی", user: "حمید حمیدی", date: "2023-12-27"},
    {doctor: "امیر امیری", user: "حمید حمیدی", date: "2023-12-26"},
    {doctor: "مجید مجیدی", user: "حمید حمیدی", date: "2023-12-18"},
    {doctor: "محمد محمدی", user: "جواد جوادی", date: "2023-12-14"},
    {doctor: "امیر امیری", user: "جواد جوادی", date: "2023-12-15"},
    {doctor: "وحید وحیدی", user: "جواد جوادی", date: "2023-12-22"},
    {doctor: "جمشید جمشیدی", user: "جواد جوادی", date: "2023-12-23"}
]

localStorage.setItem("users" ,JSON.stringify(defualtUsersArray))
localStorage.setItem("apointments" ,JSON.stringify(apointmentList))
