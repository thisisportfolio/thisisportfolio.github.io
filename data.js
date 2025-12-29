const videoData = [
  {
    id: "cat1",
    category: "BEAUTY",
    subDesc: "뷰티개발자의 전문성을 녹입니다.",
    summary: "JHP, 리시리, 퓨리스킨, 쥬베라, 효창비누, 피토메스, 원료공방, 더코리아콜라겐, NPR, 이든미네랄, 메디슈어, DPC, 스킨럽스파 등과 같은 브랜드와도 함께하고 있습니다.",
    items: [
      { title: "비플레인", link: "https://view.shoppinglive.naver.com/replays/1746282?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Beauty_01_beplain.png", details: "네이버\n라인, 앰플, 패드 스팟크림 등" },
      { title: "파티온", link: "https://view.shoppinglive.naver.com/replays/1688410?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Beauty_02_fation.png", details: "네이버\n노스카나인 앰플, 크림, 패드 등" },
      { title: "실크테라피", link: "https://view.shoppinglive.naver.com/replays/1640302?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Beauty_03_silktherapy.png", details: "네이버\n열강화 트리트먼트, 에센셜 오일 등" },
      { title: "닥터바이오", link: "https://view.shoppinglive.naver.com/replays/1500801?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Beauty_04_drbio.png", details: "네이버 카카오\n로션, 샴푸, 트리트먼트 등" },
      { title: "아로마티카", link: "https://view.shoppinglive.naver.com/replays/1611668?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Beauty_05_aromatica.png", details: "네이버\n샴푸, 트리트먼트, 두피토너 등" },
      { title: "EOA", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Beauty_06_eoa.png", details: "카카오\n풀쎄라PRO, 풀써마, 앰플, 크림" },
      { title: "케어놀로지", link: "https://view.shoppinglive.naver.com/replays/1767473?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Beauty_07_carenology.png", details: "네이버\n필링, 오일, 세럼, 앰플, 크림 등" },
      { title: "아이레놀", link: "https://view.shoppinglive.naver.com/replays/1629227?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Beauty_08_ilenol.png", details: "네이버\n생얼크림, 다크서클크림" },
      { title: "빈느", link: "https://www.youtube.com/watch?v=dtKyxKyVE0A", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Beauty_09_vinne.png", details: "쿠팡스페셜라이브\n쿠션, 립" },
      { title: "크나이프", link: "https://shoppinglive.kakao.com/live/10126?input_channel_id=4119&input_channel_id=4337&ref=live_share&ref=talk_shoppingtab_live_direct&t_src=shopping_live&t_ch=share&t_obj=URLshare", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Beauty_10_kneipp.png", details: "카카오\n페이스오일, 배쓰쏠트, 바디오일" }
    ]
  },
  {
    id: "cat2",
    category: "TECH",
    subDesc: "기능시연, 스토리텔링, TECH전문성으로 브랜딩과 매출을 위한 방송을 진행합니다.",
    summary: "LG, 삼성, TCL, SONY, 로움, 필립스, 경동나비엔, 드리미, 아카라코리아, 에코백스, 에브리봇, 엑스툴코리아 등과 같은 브랜드와도 함께하고 있습니다.",
    items: [
      { title: "휴롬(HUROM)", link: "https://m.hurom.co.kr/broadcast/live_view.php?contentId=97wm0vno", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Tech_01_hurom.png", details: "공식몰\n착즙기" },
      { title: "유라(JURA)", link: "https://view.shoppinglive.naver.com/replays/1254206?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Tech_02_jura.png", details: "네이버 더현대\n스위스 명품 커피머신" },
      { title: "샤크닌자(SHARK)", link: "https://view.shoppinglive.naver.com/replays/1662767?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Tech_03_sharkninja_vacuum.png", details: "네이버\n3241무선청소기" },
      { title: "샤크닌자(SHARK)", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Tech_04_sharkninja_blender.png", details: "네이버\n포터블블라스트블렌더" },
      { title: "위닉스(WINIX)", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Tech_05_winix_01.png", details: "네이버\n공기청정기" },
      { title: "샤크뷰티(SHARK)", link: "https://view.shoppinglive.naver.com/replays/1384898?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Tech_06_sharkbeauty.png", details: "네이버\n샤크뷰티플렉스스타일" },
      { title: "샤크닌자(SHARK)", link: "https://view.shoppinglive.naver.com/replays/1515093?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/", details: "네이버\n멀티쿠커" },
      { title: "위닉스(WINIX)", link: "https://view.shoppinglive.naver.com/replays/1634006?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Tech_08_winix_02.png", details: "네이버\n제습기 공기청정기 건조기" },
      { title: "TCL", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Tech_09_tcl.png", details: "쿠팡\nTV(벽걸이,스탠드)" },
      { title: "에코벡스(ECOVACS)", link: "https://www.thehyundai.com/front/bda/BDALiveBrodViewer.thd?pLiveBfmtNo=202504180001", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Tech_10_ecovacs.png", details: "더현대\n로봇청소기" }
    ]
  },
  { id: "cat3",
   category: "HEALTH",
   subDesc: " 전문적이고 공감하는 건강 이야기로 브랜딩과 매출을 위한 방송을  진행합니다.",
   summary: "연세생활건강, 뉴트리원, 농심 라이필, 농협 한삼인, 리큐젠유산균, 일동제약, 장인정신에브리데이, 뉴트루코리아 등의 브랜드와도 함께하고 있습니다.",
   items: [

     
   ]
  },
  { id: "cat4",
    category: "FOOD",
    subDesc: "오감을 만족시키는 먹방으로 브랜딩과 매출을 위한 방송을  진행합니다",
    summary: "동서식품, 매일우유, 청정원, 우메종, 기미상회, 미미상회,  미쁨생활건강, 과일세트, 고기세트, 굴비, 정성곳간 등과 같은 브랜드와도 함께하고 있습니다.",
    items: [

      
    ]
  },
  { id: "cat5",
   category: "LIVING",
   subDesc: "생활의 지혜를 공유합니다, 코너 속의 코너! 알.쓸.신.잡  MC!",
   summary: "AMT, 로얄코펜하겐, 현대의료기, 콕시클, 깃든, 콕시클코리아, 캄포도마, 디베르, 버틀러, 에티카,  벨르아망 등과 같은 브랜드와도 함께하고 있습니다.",
   items: [

     
   ] 
  },
  { id: "cat6", 
   category: "FASHION", 
   subDesc: "트랜디하며 편안한 방송을 하겠습니다. OOTD에 맞는 코디로 브랜딩과 매출을 위한 방송을 진행합니다.", 
   summary: "THURSDAY ISLAND(써스데이아일랜드), CC COLLECT(씨씨콜렉트), 올리브데올리브, DEWL(듀엘), 벤셔먼 등의 브랜드와도 함께하고 있습니다.", 
   items: [

     
   ]
  },
  { id: "cat7", 
   category: "TRAVEL",
   subDesc: "여행의 설렘을 공유합니다.",
   summary: "숙박, 항공, 투어 등 여행 상품 프로젝트입니다.",
   items: [

     
   ]
  },
  { id: "cat8",
   category: "LECTURE", 
   subDesc: "지식과 정보를 나누는 시간", 
   summary: "교육, 강연, 웨비나 진행 이력입니다.",
   items: [

     
   ] }
];
