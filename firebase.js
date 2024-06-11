console.log('firebase file')

// Your web app's Firebase configuration // 내 firebase 에 대한 정보
const firebaseConfig = {
    apiKey: "AIzaSyC6S8VbiSeujCyFy54bX7z2eIDMeHnzm0s",
    authDomain: "fir-test-b8da7.firebaseapp.com",
    databaseURL: "https://fir-test-b8da7-default-rtdb.firebaseio.com",
    projectId: "fir-test-b8da7",
    storageBucket: "fir-test-b8da7.appspot.com",
    messagingSenderId: "292531923915",
    appId: "1:292531923915:web:c1cd46640427b9e577a44e"
  };

  // Initialize Firebase //firebase 앱 초기화
  const app = firebase.initializeApp(firebaseConfig);

  //firebase 실시간 데이터베이스
  const database = firebase.database()

  //firebase 데이터 쓰기
  const writeUserDate = (userId, name, email)=>{

    firebase.database().ref('users/' +userId).set({
        name : name,
        email : email
    })

  }

  //firebase에 있는 데이터 읽기
  const readUserData = (userId)=>{
    const userRef = firebase.database().ref('users/') //users/ 라는 경로에서 참조를 가져옴

    userRef.once('value').then((res)=>{
        const data = res.val()
        console.log(data)
    })
  }


/* Mission! 
 1. addUserBtn 이라는 id를 가진 버튼을 클릭 시
 2. 사용자가 input 에 입력한 세개의 데이터를 각각 console창에 찍어보기 
 3. 02. JS 실전 폴더 -> ex04 참고 
*/
let addUserBtn = document.getElementById('addUserBtn') //먼저 addUserBtn을 가져와서 addUserBtn 에 저장

let frm = document.frm.elements // frm의 요소들을 가져와서 frm에 저장

addUserBtn.addEventListener('click', ()=>{ //이벤트 추가 하고 클릭시 콘솔 로그 뜨게 함수
    console.log(frm[0].value)
    console.log(frm[1].value)
    console.log(frm[2].value)
    
    writeUserDate(frm[0].value,frm[2].value,frm[1].value)
})


let getUserBtn= document.getElementById('getUserBtn')
getUserBtn.addEventListener('click', ()=>{
    console.log('유저가져오기 ck')
    readUserData('123')
})