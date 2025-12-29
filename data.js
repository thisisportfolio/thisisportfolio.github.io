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
      { title: "TCL", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Tech_09_tcl.png", details: "쿠팡스페셜라이브\nTV(벽걸이,스탠드)" },
      { title: "에코벡스(ECOVACS)", link: "https://www.thehyundai.com/front/bda/BDALiveBrodViewer.thd?pLiveBfmtNo=202504180001", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Tech_10_ecovacs.png", details: "더현대\n로봇청소기" }
    ]
  },
  { id: "cat3",
   category: "HEALTH",
   subDesc: " 전문적이고 공감하는 건강 이야기로 브랜딩과 매출을 위한 방송을  진행합니다.",
   summary: "연세생활건강, 뉴트리원, 농심 라이필, 농협 한삼인, 리큐젠유산균, 일동제약, 장인정신에브리데이, 뉴트루코리아 등의 브랜드와도 함께하고 있습니다.",
   items: [
      { title: "CJ웰케어", link: "https://view.shoppinglive.naver.com/replays/1528998?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Health_01_cj.png", details: "네이버 카카오 GLIVE\n유산균, 콜라겐, 흑삼, 아르기닌, 팻다운\n(매출2억판매)" },
      { title: "연세 생활건강 키즈텐", link: "https://shoppinglive.kakao.com/live/34431?input_channel_id=4119&ref=live_share&t_src=shopping_live&t_ch=share&t_obj=URLshare", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Health_02_kidsten.png", details: "네이버 카카오\n칼슘, 종합비타민, 유산균\n철분, 홍삼, 알로에" },
      { title: "이경제 흑염소", link: "https://player.sauceflex.com/broadcast/lkebay-51b2846c187d442595c4b72fc73cfc80?", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Health_03_goat.png", details: "GLIVE\n흑염소 스틱, 진액 ,환" },
      { title: "농심 라이필", link: "https://view.shoppinglive.naver.com/replays/1461421?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Health_04_nongshim.png", details: "네이버\n콜라겐, 락토페린, 오메가3 \n관절에쏀크릴 등" },
      { title: "닥터블릿 푸응", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Health_05_drblet.png", details: "카카오\n푸응 팻버닝, 파비플로라, 잔티젠 등" }
     
   ]
  },
  { id: "cat4",
    category: "FOOD",
    subDesc: "오감을 만족시키는 먹방으로 브랜딩과 매출을 위한 방송을  진행합니다",
    summary: "동서식품, 매일우유, 청정원, 우메종, 기미상회, 미미상회,  미쁨생활건강, 과일세트, 고기세트, 굴비, 정성곳간 등과 같은 브랜드와도 함께하고 있습니다.",
    items: [
      { title: "매일유업", link: "https://shoppinglive.kakao.com/live/48578?input_channel_id=4119&ref=live_share&t_src=shopping_live&t_ch=share&t_obj=URLshare", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Food_01_maeil.png", details: "카카오\n아몬드브리즈, 상하목장, 하루야채 등" },
      { title: "청정원", link: "https://view.shoppinglive.naver.com/replays/1733973?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Food_02_cheongjungwon.png", details: "네이버\n추석선물세트(햄, 기름, 후추 등)" },
      { title: "낫띵베럴", link: "https://shoppinglive.kakao.com/live/50717?input_channel_id=4119&ref=live_share&t_src=shopping_live&t_ch=share&t_obj=URLshare", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Food_03_nothingbetter.png", details: "카카오\n푸룬주스(푸푸른)" },
      { title: "펄세스", link: "https://view.shoppinglive.naver.com/replays/1605275?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Food_04_pulses.png", details: "네이버\n저당커피" },
      { title: "수백당", link: "https://view.shoppinglive.naver.com/replays/1625696?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Food_05_subaekdang.png", details: "네이버\n돼지국밥, 순대국밥, 전골" },
      { title: "온브릭스(onbrix)", link: "https://shoppinglive.kakao.com/live/35826?input_channel_id=4119&ref=live_share&t_src=shopping_live&t_ch=share&t_obj=URLshare", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Food_06_onbrix.png", details: "카카오\n설날선물세트(과일)" },
      { title: "이마트몰", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Food_07_emartmall.png", details: "네이버\n낚지볶음밥, 우유, 골뱅이 등" },
      { title: "정성곳간", link: "https://view.shoppinglive.naver.com/replays/1508163?fm=shoppinglive&sn=home", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Food_08_dogani.png", details: "네이버\n한우스지 도가니탕" },
      { title: "바오담", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Food_09_baodam.png", details: "네이버\n도라지정과, 약과, 강정 등" },
      { title: "프롬잇(FROMEAT)", link: "https://liveh5.coupang.com/plive/915829?pType=live&id=915829&source=sharedLink&src=1191000&spec=10999999&addtag=812&ctag=915829&lptag=CFM96485063&itime=20251229130040&pageType=LIVE%2520COMMERCE&pageValue=915829&wTime=20251229130040&redirect=landing&mcid=5141d7fc70bc4872bcabb91d87742c24&isshortened=Y&settlement=N", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Food_10_fromeat.png", details: "쿠팡스페셜라이브\n(발렌타인특집)저당초코, 스낵" }
    
    ]
  },
  { id: "cat5",
   category: "LIVING",
   subDesc: "생활의 지혜를 공유합니다, 코너 속의 코너! 알.쓸.신.잡  MC!",
   summary: "AMT, 로얄코펜하겐, 현대의료기, 콕시클, 깃든, 콕시클코리아, 캄포도마, 디베르, 버틀러, 에티카,  벨르아망 등과 같은 브랜드와도 함께하고 있습니다.",
   items: [
      { title: "시크릿데이", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Living_01_secretday.png", details: "11번가 PGM 우리집새로고침\n여성용품" }
      { title: "포트메리온", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Living_02_portmeirion.png", details: "쿠팡스페셜라이브\n선물세트" }
      { title: "유시몰", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Living_03_euthymol.png", details: "카카오\n치약" }
      { title: "한샘 샘키즈", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Living_04_hansam.png", details: "네이버\n침대, 수납장 등" }
      { title: "코코도르", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Living_05_cocodor.png", details: "쿠팡스페셜라이브\n"성은이망극한쇼핑" 크리스마스 디퓨저" }
      { title: "피지 모락셀라 세제", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Living_06_fiji.png", details: "카카오\n모락셀라부스터 런칭, 섬유유연제" }
      { title: "누잠", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Living_07_nuzam.png", details: "네이버\n토퍼매트리스, 침구류" }
      { title: "AMT", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Living_08_amt.png", details: "더현대\n스테인레스 냄비, 웍" }
      { title: "쿠첸", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Living_09_cuchen.png", details: "네이버\n압력밥솥" }
      { title: "보국전자", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Living_10_bokuk.png", details: "쿠팡스페셜라이브\n써큘레이터, 선풍기" }

     
   ] 
  },
  { id: "cat6", 
   category: "FASHION", 
   subDesc: "트랜디하며 편안한 방송을 하겠습니다. OOTD에 맞는 코디로 브랜딩과 매출을 위한 방송을 진행합니다.", 
   summary: "THURSDAY ISLAND(써스데이아일랜드), CC COLLECT(씨씨콜렉트), 올리브데올리브, DEWL(듀엘), 벤셔먼 등의 브랜드와도 함께하고 있습니다.", 
   items: [
      { title: "", link: "", img: "https://raw.githubusercontent.com/thisisportfolio/thisisportfolio.github.io/main/images/Living_01_.png", details: "\n" }

     
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
