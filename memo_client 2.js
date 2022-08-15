// component : api? 페이지?
// create-react-app
// 바벨 : 최신 js문법을 구형 브라우저에서도 동작하게 만들어줌
// 웹팩 : 많은 모듈들을 합쳐서 간단하게 만들어줌(src폴더만, public은 안해줌) -> 이미지 파일을 넣고 싶을 때에는 이미지 파일은 pub가 아니라 src에 넣어서 웹팩이 먹힐 수 있게 해야함
// npm : 레지스트리라는 라이브러리 저장소 역할 -> package.json에 정리되어있음
// npx : 레지스트리에 있는 create-react-app을 다운로드 없이 실행할 수 있음

// react의 구성(client)
// npm run start : "react-scripts start"
// app.js의 div(class = app) 부분이 렌더링부분으로 설정됨
// app.js가 app이름으로 export되고 이것을 index.js(client/src)에서 사용 -> 이것을 렌더링
// const root = ReactDOM.createRoot(document.getElementById('root'));
// public에 있는 index.html의 div(id)을 잡아줌 + 이를 변수로 저장
// root.render(<App />) : 변수에 들어갈(보여줄)부분이 <App />이다.
// 큰틀 : index.html(pub), 내용물(렌더링) : App.js, 연걸 : index.js(src)

// 여기서 부터는 BoilerPlate에 특성화된 구조
// component/views : page들을 넣는다
// app.js : 라우팅관련 일을 처리(로그인페이지로 가고 싶다, 랜딩페이지에 가고 싶다 등)
// config.js : 환경변수를 전하는 일
// hoc : component안에 function으로 hoc는 다른 component를 갖는 function (?)
// auth(hoc) : 어떤 사람이 자격이되는지 check를 하는 hoc -> 자격여부에 따라서 해당페이지 혹은 다른 페이지로 이동시킴
// utils : 여러군데 쓰이는 것들을 이곳에 넣어서 어디서든 쓸 수 있도록

// app.js에서 routing하는 방법
// react에서는 page간에 이동을 할 떄, react router dom이라는 것을 사용
// rrd를 import해서 여러 기능들을 가져옴
// 실행되면 root안의 app클래스 안의 요소들이 출력(라우팅)됨
// 필요한 페이지들도 import해야함
// return (Router - Routes - Route X n)
// <Route exact path="/" element={ < LandingPage /> }/> => </> 조심하기

// 데이터의 흐름
// 유저가 로그인을 하고 싶어 -> 클라이언트에서 이름과 비밀번호를 입력 + 로그인버튼(요청) => react가 클라이언트임
// 그 요청이 서버로감 => 데이터 베이스에 이름이 있는지, 있으면 비밀번호가 일치하는지 확인
// 맞으면 response를 성공했다고 보내줌 그렇지 않으면 적당한 것을 반환함
// Axios를 사용해서 요청을 보냄
// axios : 
// useEffect(() => { axios.get('/api/hello').then(response => console.log(response.data))}, [])
// get req를 서버에 보냄, endpoint : /api/hello, 보낸 후에 서버에서 돌아오는 res를 콘솔창에 띄움
// 서버는 5000번 포트이고 클라이언트는 3000번 포트임 -> 오류발생 (CORS 이슈) -> proxy 설정

//  concurrently, antd css framework : 쉽게 해줌

// props, state
// props : property의 줄임말 -> 부모 component와 자식 component 간의 교환 시에 사용함 + props은 부모 com에서 자삭com으로 보낼 수 있음(일방향)
// 부모com가 준 정보는 자식com에서 바꿀 수 없음 -> 부모com이 새로운 값을 다시 줘야함
// state -> com안에서 정보를 교환할 때 사용 + com 안에서도 변화가능, 변화 시 re-rendering됨

// redux : state를 관리해주는 툴 : reduxStore을 사용해서 왔다갔다 하는 과정이 없어짐 (바로 Store로 직행)
// redux의 진행 : React component(Dispatch) -> Action -> Reducer -> Store(Subscribe) -> React component (일방향)
// Action : 무엇이 일어났는지 설명하는 객체 { type : "Fetch User Success", response : { id : 3, name : 'john' } }
// Dispatch를 통해서 Action이 발생(state의 유일한 변경 방법)
// Reducer : action을 통해서 어떻게 변했는지 (previous state, action) => next state(return)
// Store : state을 감싸주는 역할 + store내부의 메서드를 통해서 state를 관리 
// 어쩔떄는 Store가 받는 것이 Promise, function일 수도 있음 -> 객체만 받을 줄 아는 store는 받을 수 없음
// redux-thunk : dispatch에게 어떻게 function을 받는지 알려줌(middleware)
// redux-promise : dispatch에게 어떻게 promise를 받는지 알려줌(middleware)
// provider : react-redux dependency에 있음, 그 안에 store을 넣어야함

// react component : class component(더많은 기능, 더 복잡, 더 느림), functional component(적은 기능, 간단, 빠름) ex) useEffect
// react component의 생성(class) : [construct생성, state부여(this.state)] -> [렌더(DOM에 알맞게 넣어줌)] -> componentDidMount(class)
// react component의 생성(functional) : [construct생성, state부여(useState = '')] -> [렌더(DOM에 알맞게 넣어줌)] -> useEffect(functional)



// login 기능
// 강의에서는 css와html 파일 없이 함
// value부분에 state를 부여
// const [Email, setEmail] = useState("");
// "" : 기초 상태(빈칸)
// type -> state변경 -> value에 그 값이 들어감
// form에 submit이벤트를 줘야지 제출이됨 + button에도 type=submit를 줘야함
// event.preventDefault()를 주는 이유 : refresh를 막기 위해서
//  서버로 보내고자 하는 값을 state에서 가지고 있음 => 이를 axios를 이용해서 보내야함(post)
// axios에다가 redux를 같이 사용 : 어려움
// 15분 부터 다시 듣기

// Auth
// 사용자의 페이지 이동 시도 -> Auth가 서버에게 request(상태) 요청 -> 해당 사용자의 상태 가져옴(관리자? 로그인상태? 등) -> 상태에 따라서 사용자 결과 다름(이동)