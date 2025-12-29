const videoData = [
  {
    id: "cat1",
    category: "BEAUTY",
    subDesc: "뷰티개발자의 전문성을 녹입니다.",
    summary: "JHP, 리시리, 퓨리스킨, 쥬베라, 효창비누, 피토메스, 원료공방, 더코리아콜라겐, NPR, 이든미네랄, 메디슈어, DPC, 스킨럽스파 등과 같은 브랜드와도 함께하고 있습니다.",
    items: [
      { title: "비플레인", link: "https://view.shoppinglive.naver.com/replays/1746282?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Beauty_01_beplain.png", details: "네이버\n라인, 앰플, 패드 스팟크림 등" },
      { title: "파티온", link: "https://view.shoppinglive.naver.com/replays/1688410?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Beauty_02_fation.png", details: "네이버\n노스카나인 앰플, 크림, 패드 등" },
      { title: "실크테라피", link: "https://view.shoppinglive.naver.com/replays/1640302?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Beauty_03_silktherapy.png", details: "네이버\n열강화 트리트먼트, 에센셜 오일 등" },
      { title: "닥터바이오", link: "https://view.shoppinglive.naver.com/replays/1500801?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Beauty_04_drbio.png", details: "네이버 카카오\n로션, 샴푸, 트리트먼트 등" },
      { title: "아로마티카", link: "https://view.shoppinglive.naver.com/replays/1611668?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Beauty_05_aromatica.png", details: "네이버\n샴푸, 트리트먼트, 두피토너 등" },
      { title: "EOA", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Beauty_06_eoa.png", details: "카카오\n풀쎄라PRO, 풀써마, 앰플, 크림" },
      { title: "케어놀로지", link: "https://view.shoppinglive.naver.com/replays/1767473?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Beauty_07_carenology.png", details: "네이버\n필링, 오일, 세럼, 앰플, 크림 등" },
      { title: "아이레놀", link: "https://view.shoppinglive.naver.com/replays/1629227?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Beauty_08_ilenol.png", details: "네이버\n생얼크림, 다크서클크림" },
      { title: "빈느", link: "https://www.youtube.com/watch?v=dtKyxKyVE0A", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Beauty_09_vinne.png", details: "쿠팡스페셜라이브\n쿠션, 립" },
      { title: "크나이프", link: "https://shoppinglive.kakao.com/live/10126", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Beauty_10_kneipp.png", details: "카카오\n페이스오일, 배쓰쏠트, 바디오일" }
    ]
  },
  {
    id: "cat2",
    category: "TECH",
    subDesc: "기능시연, 스토리텔링, TECH전문성으로 브랜딩과 매출을 위한 방송을 진행합니다.",
    summary: "LG, 삼성, TCL, SONY, 로움, 필립스, 경동나비엔, 드리미, 아카라코리아, 에코백스, 에브리봇, 엑스툴코리아 등과 같은 브랜드와도 함께하고 있습니다.",
    items: [
      { title: "휴롬(HUROM)", link: "https://m.hurom.co.kr/broadcast/live_view.php?contentId=97wm0vno", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Tech_01_hurom.png", details: "공식몰\n착즙기" },
      { title: "유라(JURA)", link: "https://view.shoppinglive.naver.com/replays/1254206?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Tech_02_jura.png", details: "네이버 더현대\n스위스 명품 커피머신" },
      { title: "샤크닌자(SHARK)", link: "https://view.shoppinglive.naver.com/replays/1662767?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Tech_03_sharkninja_vacuum.png", details: "네이버\n3241무선청소기" },
      { title: "샤크닌자(SHARK)", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Tech_04_sharkninja_blender.png", details: "네이버\n포터블블라스트블렌더" },
      { title: "위닉스(WINIX)", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Tech_05_winix_01.png", details: "네이버\n공기청정기" },
      { title: "샤크뷰티(SHARK)", link: "https://view.shoppinglive.naver.com/replays/1384898?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Tech_06_sharkbeauty.png", details: "네이버\n샤크뷰티플렉스스타일" },
      { title: "샤크닌자(SHARK)", link: "https://view.shoppinglive.naver.com/replays/1515093?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Tech_07_sharkninja_multi.png", details: "네이버\n멀티쿠커" },
      { title: "위닉스(WINIX)", link: "https://view.shoppinglive.naver.com/replays/1634006?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Tech_08_winix_02.png", details: "네이버\n제습기 공기청정기 건조기" },
      { title: "TCL", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Tech_09_tcl.png", details: "쿠팡스페셜라이브\nTV(벽걸이,스탠드)" },
      { title: "에코벡스(ECOVACS)", link: "https://www.thehyundai.com/front/bda/BDALiveBrodViewer.thd?pLiveBfmtNo=202504180001", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Tech_10_ecovacs.png", details: "더현대\n로봇청소기" }
    ]
  },
  {
    id: "cat3",
    category: "HEALTH",
    subDesc: " 전문적이고 공감하는 건강 이야기로 브랜딩과 매출을 위한 방송을 진행합니다.",
    summary: "연세생활건강, 뉴트리원, 농심 라이필, 농협 한삼인, 리큐젠유산균, 일동제약, 장인정신에브리데이, 뉴트루코리아 등의 브랜드와도 함께하고 있습니다.",
    items: [
      { title: "CJ웰케어", link: "https://view.shoppinglive.naver.com/replays/1528998?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Health_01_cj.png", details: "네이버 카카오 GLIVE\n유산균, 콜라겐, 흑삼, 아르기닌, 팻다운\n(매출2억판매)" },
      { title: "연세 생활건강 키즈텐", link: "https://shoppinglive.kakao.com/live/34431", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Health_02_kidsten.png", details: "네이버 카카오\n칼슘, 종합비타민, 유산균\n철분, 홍삼, 알로에" },
      { title: "이경제 흑염소", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Health_03_blackgoat.png", details: "네이버\n진액, 스틱" },
      { title: "비오비천", link: "https://view.shoppinglive.naver.com/replays/1169343?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Health_04_bob.png", details: "네이버\n유산균" },
      { title: "한샘바스", link: "https://view.shoppinglive.naver.com/replays/1603517?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Health_05_hanssem.png", details: "네이버\n욕실 시공" },
      { title: "경동나비엔", link: "https://view.shoppinglive.naver.com/replays/1126756?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Health_06_navien.png", details: "네이버\n온수매트 카본매트" },
      { title: "바디프랜드", link: "https://view.shoppinglive.naver.com/replays/1402264?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Health_07_bodyfriend.png", details: "네이버\n안마의자" },
      { title: "나이키", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Health_08_nike.png", details: "쿠팡스페셜라이브\n의류, 운동화" },
      { title: "에어로빅스", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Health_09_aerobics.png", details: "쿠팡스페셜라이브\n트램펄린" }
    ]
  },
  {
    id: "cat4",
    category: "LIFESTYLE",
    subDesc: "트렌디한 안목으로 브랜드와 제품을 소개합니다.",
    summary: "메디체크(한국건강관리협회), 야놀자, 아고다, 휘닉스평창, 아크로패스, 한샘 바스, 올리브영, 다이슨, 코오롱 몰, 자코모 등과 같은 브랜드와도 함께하고 있습니다.",
    items: [
      { title: "테팔(Tefal)", link: "https://view.shoppinglive.naver.com/replays/1761622?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Life_01_tefal.png", details: "네이버\n에어프라이어, 믹서기, 커피머신 등" },
      { title: "휘닉스평창", link: "https://view.shoppinglive.naver.com/replays/1367049?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Life_02_phoenix.png", details: "네이버 카카오 야놀자\n패키지(객실+조식+워터파크+스키)" },
      { title: "경동나비엔", link: "https://view.shoppinglive.naver.com/replays/1744610?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Life_03_navien.png", details: "네이버\n환기청정기" },
      { title: "한샘 바스", link: "https://view.shoppinglive.naver.com/replays/1149954?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Life_04_hanssem.png", details: "네이버\n욕실 시공" },
      { title: "아고다(Agoda)", link: "https://view.shoppinglive.naver.com/replays/1269344?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Life_05_agoda.png", details: "네이버\n제주 호텔 숙박권" },
      { title: "삼성 가전", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Life_06_samsung.png", details: "쿠팡스페셜라이브\n냉장고, 세탁기, TV 등" },
      { title: "필립스(Philips)", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Life_07_philips.png", details: "쿠팡스페셜라이브\n전기면도기" },
      { title: "자코모(Jakomo)", link: "https://view.shoppinglive.naver.com/replays/1402264?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Life_08_jakomo.png", details: "네이버\n소파" },
      { title: "다이슨(Dyson)", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Life_09_dyson.png", details: "쿠팡스페셜라이브\n에어랩, 드라이기" }
    ]
  },
  {
    id: "cat5",
    category: "FOOD",
    subDesc: "오감을 자극하는 맛표현과 시연으로 판매를 넘어 브랜드 팬덤을 만듭니다.",
    summary: "코카콜라, 정관장, 마이셰프 밀키트, 도미노피자, 고메(CJ), 햇반(CJ), 쉐이크쉑, 본죽, 프레시지, 아임닭, 랭킹닭컴, 올가니카, 허닭 등과 같은 브랜드와도 함께하고 있습니다.",
    items: [
      { title: "정관장", link: "https://view.shoppinglive.naver.com/replays/1758528?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Food_01_jung.png", details: "네이버\n에브리타임, 홍삼정, 스틱 등" },
      { title: "코카콜라", link: "https://view.shoppinglive.naver.com/replays/1638290?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Food_02_coke.png", details: "네이버\n코카콜라 제로, 스프라이트 등" },
      { title: "마이셰프 밀키트", link: "https://view.shoppinglive.naver.com/replays/1162624?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Food_03_mychef.png", details: "네이버\n스테이크, 파스타 등" },
      { title: "도미노피자", link: "https://view.shoppinglive.naver.com/replays/1269344?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Food_04_domino.png", details: "네이버\n방문포장 할인권" },
      { title: "CJ제일제당 고메", link: "https://view.shoppinglive.naver.com/replays/1629227?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Food_05_cjgourmet.png", details: "네이버\n치킨, 피자 등" },
      { title: "쉐이크쉑", link: "https://view.shoppinglive.naver.com/replays/1510467?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Food_06_shakeshack.png", details: "네이버\n버거, 쉐이크" },
      { title: "본죽", link: "https://view.shoppinglive.naver.com/replays/1402264?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Food_07_bonjuk.png", details: "네이버\n죽, 비빔밥 모바일권" },
      { title: "프레시지", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Food_08_fresheasy.png", details: "쿠팡스페셜라이브\n밀키트 스테이크" },
      { title: "올가니카", link: "https://view.shoppinglive.naver.com/replays/1761622?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Food_09_organica.png", details: "네이버\n프로틴 쉐이크" }
    ]
  },
  {
    id: "cat6",
    category: "OFF-LINE",
    subDesc: "풍부한 현장 경험으로 긴장감 속에서도 최고의 결과물을 만들어냅니다.",
    summary: "신세계 백화점, 현대 백화점, 롯데 백화점, 갤러리아 백화점, AK플라자, 파주 프리미엄 아울렛, 기흥 아울렛, 타임스퀘어 등 다양한 현장 라이브 경험을 보유하고 있습니다.",
    items: [
      { title: "현대백화점 판교", link: "https://view.shoppinglive.naver.com/replays/1254206?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Offline_01_hyundai.png", details: "현장 라이브\n유라 커피머신" },
      { title: "신세계백화점 강남", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Offline_02_shinsegae.png", details: "현장 라이브\n뷰티 브랜드 명품관" },
      { title: "롯데백화점 본점", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Offline_03_lotte.png", details: "현장 라이브\n테크 브랜드 시연" },
      { title: "AK플라자", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Offline_04_ak.png", details: "현장 라이브\n패션 잡화" },
      { title: "파주 아울렛", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Offline_05_paju.png", details: "현장 라이브\n스포츠 브랜드" }
    ]
  },
  {
    id: "cat7",
    category: "FASHION",
    subDesc: "제품의 강점을 돋보이게 하는 스타일링과 감각적인 설명으로 소비자의 욕구를 자극합니다.",
    summary: "나이키, 아디다스, 코오롱 몰, 자코모 소파, 지오다노, 탑텐, 휠라, 뮬라웨어, 안다르, 에이블리 등과 함께했습니다.",
    items: [
      { title: "나이키", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Fashion_01_nike.png", details: "쿠팡스페셜라이브\n의류, 운동화" },
      { title: "아디다스", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Fashion_02_adidas.png", details: "쿠팡스페셜라이브\n스포츠 웨어" },
      { title: "코오롱 몰", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Fashion_03_kolon.png", details: "브랜드 위크\n아웃도어" }
    ]
  },
  {
    id: "cat8",
    category: "KIDS",
    subDesc: "엄마의 마음으로 공감하며 아이들을 위한 건강한 제품을 진심으로 소개합니다.",
    summary: "연세생활건강 키즈텐, 장인정신 에브리데이, 일동 후디스, 파스퇴르, 킨도 기저귀, 하기스, 블루래빗, 영실업 등 키즈 전문 브랜드와 함께하고 있습니다.",
    items: [
      { title: "연세 키즈텐", link: "https://shoppinglive.kakao.com/live/34431", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Kids_01_kidsten.png", details: "카카오 라이브\n어린이 영양제" },
      { title: "장인정신 에브리데이", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Kids_02_jangin.png", details: "네이버 라이브\n엘더베리 시럽" },
      { title: "킨도 기저귀", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Kids_03_kindoh.png", details: "네이버 라이브\n기저귀, 물티슈" }
    ]
  },
  {
    id: "cat9",
    category: "LECTURE",
    subDesc: "실무에서 쌓은 노하우를 바탕으로 변화하는 미디어 환경에 맞는 전략을 강의합니다.",
    summary: "네이버 쇼핑라이브 아카데미, 소상공인 시장 진흥공단, 경기도 경제 과학 진흥원, 각종 지자체 및 대학교에서 라이브 커머스 전략 및 방송 진행법을 강의하고 있습니다.",
    items: [
      { title: "라이브커머스 전략", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Lecture_01.png", details: "지자체 강의\n판매 전략" },
      { title: "진행법 특강", link: "", img: "https://raw.githubusercontent.com/thebestlive/thebestlive.github.io/main/images/Lecture_02.png", details: "대학교 특강\n쇼호스트 스피치" }
    ]
  }
];
