const salons = [
  {
    id: "s1",
    name: "Maison Frix",
    region: "hongdae",
    areaKey: "region.hongdae",
    rating: 4.9,
    distance: "0.7km",
    price: "₩₩",
    languages: ["EN", "JP", "CN"],
    specialties: ["커트", "레이어드", "광택"],
    thumbKey: "thumb.layered",
    reasonKey: "reason.layered",
    tags: ["tag.foreigner", "tag.layered", "tag.walk7"],
  },
  {
    id: "s2",
    name: "Frix Atelier",
    region: "hongdae",
    areaKey: "region.hongdae",
    rating: 4.8,
    distance: "1.1km",
    price: "₩₩₩",
    languages: ["EN", "FR"],
    specialties: ["펌", "스타일링"],
    thumbKey: "thumb.softperm",
    reasonKey: "reason.walk",
    tags: ["tag.foreigner", "tag.perm", "tag.walk10"],
  },
  {
    id: "s3",
    name: "Rosebound",
    region: "myeongdong",
    areaKey: "region.myeongdong",
    rating: 4.7,
    distance: "0.5km",
    price: "₩₩",
    languages: ["EN", "CN"],
    specialties: ["컬러", "클리닉"],
    thumbKey: "thumb.color",
    reasonKey: "reason.color",
    tags: ["tag.foreigner", "tag.color", "tag.metro"],
  },
  {
    id: "s4",
    name: "Jeju Muse",
    region: "myeongdong",
    areaKey: "region.myeongdong",
    rating: 4.85,
    distance: "1.1km",
    price: "₩₩",
    languages: ["EN", "TH"],
    specialties: ["컬러", "메이크업"],
    thumbKey: "thumb.color",
    reasonKey: "reason.color",
    tags: ["tag.foreigner", "tag.color", "tag.metro"],
  },
  {
    id: "s5",
    name: "Velvet Line",
    region: "itaewon",
    areaKey: "region.itaewon",
    rating: 4.6,
    distance: "0.9km",
    price: "₩",
    languages: ["EN", "JP"],
    specialties: ["펌", "클리닉"],
    thumbKey: "thumb.softperm",
    reasonKey: "reason.perm",
    tags: ["tag.foreigner", "tag.perm", "tag.walk7"],
  },
  {
    id: "s6",
    name: "River Bloom",
    region: "itaewon",
    areaKey: "region.itaewon",
    rating: 4.75,
    distance: "1.9km",
    price: "₩₩",
    languages: ["EN", "ES"],
    specialties: ["커트", "펌"],
    thumbKey: "thumb.layered",
    reasonKey: "reason.layered",
    tags: ["tag.foreigner", "tag.layered", "tag.walk10"],
  },
];

const i18n = {
  ko: {
    "brand.tag": "Beauty concierge for travelers",
    "nav.about": "서비스 안내",
    "nav.partners": "파트너 문의",
    "nav.language": "언어",
    "hero.eyebrow": "Foreigner-friendly booking",
    "hero.title": "고민하지 말고, 원하는 스타일을 가장 잘하는 서울 뷰티샵을 추천받고 바로 예약하세요.",
    "hero.lead":
      "지역·일정·스타일만 입력하면, 당신에게 맞는 디자이너를 숙소 근처에서 스타일과 동선 기준으로 매칭해드려요.",
    "metric.salons": "검증 샵",
    "metric.languages": "사용 국가",
    "metric.rating": "만족도",
    "form.kicker": "1분 입력 → 추천 결과 즉시 확인",
    "form.title": "빠른 추천 받기",
    "form.subtitle": "사진이 없어도 괜찮아요. 원하는 분위기만 적어도 돼요.",
    "form.region": "어디에서 받고 싶나요?",
    "form.regionPlaceholder": "지역 선택 (명동·홍대·이태원 등)",
    "form.neighborhood": "숙소/랜드마크 (선택)",
    "form.date": "언제 받으실래요?",
    "form.time": "선호 시간대",
    "form.timePlaceholder": "오후 2~6시 (디자이너가 확정)",
    "form.service": "원하는 시술",
    "service.cut": "커트",
    "service.color": "염색",
    "service.perm": "펌",
    "service.spa": "헤드스파",
    "service.makeup": "메이크업",
    "form.image": "원하는 스타일 (선택)",
    "form.imagePlaceholder": "이미지 미리보기",
    "form.imageHint": "Pinterest/Instagram 링크도 가능",
    "form.styleHeading": "원하는 스타일을 편하게 설명해 주세요.",
    "form.noExplain": "현장에서 설명하지 않아도 돼요.",
    "form.notes": "요청사항",
    "form.notesPlaceholder": "예: English support needed / allergy / no bleaching",
    "form.submit": "지금 바로 추천받기",
    "form.note": "디자이너가 요청을 검토한 뒤 확정합니다. (평균 2시간)",
    "results.title": "추천 미용실",
    "results.badge": "Foreigner-friendly booking",
    "results.subtitle": "입력한 조건에 가장 가까운 샵을 골라드렸어요.",
    "results.alt": "1순위 디자이너가 불가하면 다음 디자이너로 바로 이어서 진행할까요?",
    "results.altYes": "Yes",
    "results.altNo": "No",
    "results.placeholderTitle": "추천 결과가 여기에 표시됩니다.",
    "results.placeholderBody": "지역과 일정 입력 후 추천 받기를 눌러주세요.",
    "results.emptyTitle": "해당 지역에 추천 가능한 디자이너가 없습니다.",
    "results.emptyBody": "다른 지역을 선택하거나 날짜를 변경해 주세요.",
    "results.requiredTitle": "필수 정보를 먼저 입력해 주세요.",
    "results.requiredBody": "지역, 날짜, 시간을 입력하면 추천 결과가 표시됩니다.",
    "steps.title": "예약 과정",
    "steps.subtitle": "프릭스가 고민을 줄이고 예약까지 대신합니다.",
    "steps.one": "스타일 & 일정 입력",
    "steps.oneBody": "지역 + 일정 + 스타일만",
    "steps.two": "최적 샵 추천",
    "steps.twoBody": "검증된 디자이너 중 최적 매칭",
    "steps.three": "프릭스가 예약 확정",
    "steps.threeBody": "언어/예약 커뮤니케이션까지 처리",
    "modal.close": "닫기",
    "modal.title": "예약 확인",
    "modal.cancel": "취소",
    "modal.next": "예약 진행",
    "modal.back": "뒤로",
    "payment.title": "결제 정보",
    "payment.desc": "보증금을 결제하면 예약이 확정됩니다.",
    "payment.name": "이름",
    "payment.email": "이메일",
    "payment.phone": "연락처",
    "payment.card": "카드 끝 4자리",
    "payment.policy": "취소 정책에 동의합니다.",
    "payment.deposit": "예약 보증금",
    "payment.pay": "보증금 결제",
    "payment.processing": "결제 처리 중",
    "success.title": "예약 완료",
    "success.desc": "확정 안내를 이메일과 문자로 전송합니다.",
    "success.email": "이메일",
    "success.sms": "문자",
    "success.resendEmail": "이메일 재전송",
    "success.resendSms": "문자 재전송",
    "status.ready": "대기",
    "status.sending": "전송 중",
    "status.sent": "전송됨",
    "success.done": "완료",
    "card.request": "예약 요청하기",
    "card.map": "Google Maps",
    "card.reason": "이 샵을 추천한 이유",
    "tag.foreigner": "외국인 예약 OK",
    "tag.layered": "레이어드",
    "tag.perm": "펌 전문",
    "tag.walk7": "도보 7분",
    "tag.walk10": "10분 이내",
    "tag.metro": "역세권",
    "tag.color": "컬러 전문",
    "thumb.layered": "Layered Cut",
    "thumb.softperm": "Soft Perm",
    "thumb.color": "Gloss Color",
    "reason.layered": "요청한 “레이어드 컷” 레퍼런스와 유사 포트폴리오가 많아요.",
    "reason.walk": "홍대 기준 도보 7분 + 외국인 응대 경험이 많아요.",
    "reason.color": "광택 컬러 포트폴리오와 외국인 리뷰가 많아요.",
    "reason.perm": "부드러운 펌 결과 사진이 많은 샵이에요.",
    "region.myeongdong": "명동",
    "region.hongdae": "홍대",
    "region.itaewon": "이태원",
    "success.message":
      "예약이 완료되었습니다. {salon}에서 {date} {time}에 뵐게요. 컨시어지가 30분 내에 연락드립니다.",
  },
  en: {
    "brand.tag": "Beauty concierge for travelers",
    "nav.about": "How it works",
    "nav.partners": "Partner inquiry",
    "nav.language": "Language",
    "hero.eyebrow": "Foreigner-friendly booking",
    "hero.title": "Start your curated match.",
    "hero.lead":
      "Tell us your area, date, and preferred time window. We’ll connect you with top designers near your stay—selected for style match and convenience.",
    "metric.salons": "Verified shops",
    "metric.languages": "Countries served",
    "metric.rating": "Satisfaction",
    "form.kicker": "Start a curated experience",
    "form.title": "Start your curated match",
    "form.subtitle": "We connect you to the best designer for YOU—near where you’ll stay or visit.",
    "form.region": "Preferred area",
    "form.regionPlaceholder": "Select area (Myeongdong, Hongdae, Itaewon)",
    "form.neighborhood": "Hotel or landmark (optional)",
    "form.date": "Preferred date",
    "form.time": "Preferred time window",
    "form.timePlaceholder": "e.g., 2–6 PM (designer will confirm exact time)",
    "form.service": "Preferred service",
    "service.cut": "Cut",
    "service.color": "Color",
    "service.perm": "Perm",
    "service.spa": "Head spa",
    "service.makeup": "Makeup",
    "form.image": "Style reference (optional)",
    "form.imagePlaceholder": "Image preview",
    "form.imageHint": "Upload or paste a Pinterest/Instagram link.",
    "form.styleHeading": "Share your style in your own words.",
    "form.noExplain": "No need to explain in person.",
    "form.notes": "Describe your style",
    "form.notesPlaceholder": "Soft layered cut, natural volume, no bleach.",
    "form.submit": "Continue to style details",
    "form.note": "Designer confirms time and price after review.",
    "results.title": "Recommended salons",
    "results.badge": "Foreigner-friendly booking",
    "results.subtitle": "We picked the closest matches to your request.",
    "results.alt": "If the first designer is unavailable, can we move to the next best match automatically?",
    "results.altYes": "Yes",
    "results.altNo": "No",
    "results.placeholderTitle": "Your recommendations will appear here.",
    "results.placeholderBody": "Choose region, date, time, then request matches.",
    "results.emptyTitle": "No designers available in this area.",
    "results.emptyBody": "Try another region or date.",
    "results.requiredTitle": "Please fill in the required fields.",
    "results.requiredBody": "Region, date, and time are needed to show matches.",
    "steps.title": "Your curated flow",
    "steps.subtitle": "We translate your request and confirm on your behalf.",
    "steps.one": "Curation start",
    "steps.oneBody": "Area, date, and preferred time window",
    "steps.two": "Style translation",
    "steps.twoBody": "Describe your style in comfortable language",
    "steps.three": "Designer handoff",
    "steps.threeBody": "We send your request before confirmation",
    "modal.close": "Close",
    "modal.title": "Confirm your request",
    "modal.cancel": "Cancel",
    "modal.next": "Continue",
    "modal.back": "Back",
    "payment.title": "Payment details",
    "payment.desc": "Deposit is requested after the designer confirms time and price.",
    "payment.name": "Full name",
    "payment.email": "Email",
    "payment.phone": "Phone",
    "payment.card": "Last 4 digits",
    "payment.policy": "I agree to the cancellation policy.",
    "payment.deposit": "Deposit",
    "payment.pay": "Pay deposit",
    "payment.processing": "Processing payment",
    "success.title": "Designer review in progress",
    "success.desc": "We’re translating your request and sending it to the designer.",
    "success.email": "Email",
    "success.sms": "SMS",
    "success.resendEmail": "Resend email",
    "success.resendSms": "Resend SMS",
    "status.ready": "Ready",
    "status.sending": "Sending",
    "status.sent": "Sent",
    "success.done": "Done",
    "card.request": "Request booking",
    "card.map": "Google Maps",
    "card.reason": "Why we picked this salon",
    "tag.foreigner": "Foreigner booking OK",
    "tag.layered": "Layered cut",
    "tag.perm": "Perm expert",
    "tag.walk7": "7-min walk",
    "tag.walk10": "Within 10 min",
    "tag.metro": "Near subway",
    "tag.color": "Color specialist",
    "thumb.layered": "Layered Cut",
    "thumb.softperm": "Soft Perm",
    "thumb.color": "Gloss Color",
    "reason.layered": "Plenty of portfolios similar to your layered cut reference.",
    "reason.walk": "7-minute walk from Hongdae + strong foreign guest support.",
    "reason.color": "Excellent gloss color portfolio with foreign guest reviews.",
    "reason.perm": "Known for soft perm results and styling.",
    "region.myeongdong": "Myeongdong",
    "region.hongdae": "Hongdae",
    "region.itaewon": "Itaewon",
    "success.message":
      "We’ll confirm exact time and price after the designer reviews your request.",
  },
  ja: {
    "brand.tag": "Beauty concierge for travelers",
    "nav.about": "サービス案内",
    "nav.partners": "パートナー問い合わせ",
    "nav.language": "言語",
    "hero.eyebrow": "Foreigner-friendly booking",
    "hero.title": "迷わずに、理想のスタイルに強いソウルのサロンを見つけて予約まで。",
    "hero.lead":
      "日程・エリア・理想のスタイルを入力するだけ。外国人予約OKの検証済みサロンをすぐにマッチング。",
    "metric.salons": "検証サロン",
    "metric.languages": "利用国",
    "metric.rating": "満足度",
    "form.kicker": "1分入力 → すぐにおすすめ",
    "form.title": "すぐにおすすめ",
    "form.subtitle": "写真がなくても大丈夫。雰囲気だけでOK。",
    "form.region": "どこで受けたいですか？",
    "form.regionPlaceholder": "エリアを選択",
    "form.neighborhood": "詳細エリア (例: ホンデ)",
    "form.date": "いつ受けたいですか？",
    "form.time": "希望時間帯",
    "form.timePlaceholder": "例: 14〜18時 (最終時間は確認)",
    "form.service": "希望メニュー",
    "service.cut": "カット",
    "service.color": "カラー",
    "service.perm": "パーマ",
    "service.spa": "ヘッドスパ",
    "service.makeup": "メイク",
    "form.image": "参考画像 (任意)",
    "form.imagePlaceholder": "画像プレビュー",
    "form.imageHint": "Pinterest/InstagramリンクもOK",
    "form.styleHeading": "希望のスタイルを自由に書いてください。",
    "form.noExplain": "現地で説明する必要はありません。",
    "form.notes": "リクエスト",
    "form.notesPlaceholder": "例: English support needed / allergy / no bleaching",
    "form.submit": "今すぐおすすめ",
    "form.note": "平均返信時間: 2時間",
    "results.title": "おすすめサロン",
    "results.badge": "Foreigner-friendly booking",
    "results.subtitle": "条件に近いサロンを選びました。",
    "results.alt": "第一希望が不可の場合、近いスタイルで提案してもよろしいですか？",
    "results.altYes": "Yes",
    "results.altNo": "No",
    "results.placeholderTitle": "おすすめ結果がここに表示されます。",
    "results.placeholderBody": "エリアと日時を入力してから押してください。",
    "results.emptyTitle": "このエリアのおすすめはありません。",
    "results.emptyBody": "別のエリアや日程をお試しください。",
    "results.requiredTitle": "必須情報を入力してください。",
    "results.requiredBody": "エリア・日付・時間が必要です。",
    "steps.title": "予約の流れ",
    "steps.subtitle": "フリックスが迷いと予約を代行します。",
    "steps.one": "スタイル & 日程入力",
    "steps.oneBody": "希望スタイル(画像) + 日程だけ",
    "steps.two": "最適サロン推薦",
    "steps.twoBody": "検証済みサロンから最適マッチ",
    "steps.three": "フリックスが確定",
    "steps.threeBody": "言語/予約コミュニケーションまで対応",
    "modal.close": "閉じる",
    "modal.title": "予約確認",
    "modal.cancel": "キャンセル",
    "modal.next": "次へ",
    "modal.back": "戻る",
    "payment.title": "支払い情報",
    "payment.desc": "デポジットの支払いで予約が確定します。",
    "payment.name": "氏名",
    "payment.email": "メール",
    "payment.phone": "連絡先",
    "payment.card": "カード下4桁",
    "payment.policy": "キャンセルポリシーに同意します。",
    "payment.deposit": "デポジット",
    "payment.pay": "支払う",
    "payment.processing": "決済処理中",
    "success.title": "予約完了",
    "success.desc": "確認メールとSMSを送信します。",
    "success.email": "メール",
    "success.sms": "SMS",
    "success.resendEmail": "メール再送",
    "success.resendSms": "SMS再送",
    "status.ready": "待機",
    "status.sending": "送信中",
    "status.sent": "送信済み",
    "success.done": "完了",
    "card.request": "予約リクエスト",
    "card.map": "Google Maps",
    "card.reason": "おすすめ理由",
    "tag.foreigner": "外国人予約OK",
    "tag.layered": "レイヤーカット",
    "tag.perm": "パーマ専門",
    "tag.walk7": "徒歩7分",
    "tag.walk10": "10分以内",
    "tag.metro": "駅近",
    "tag.color": "カラー専門",
    "thumb.layered": "Layered Cut",
    "thumb.softperm": "Soft Perm",
    "thumb.color": "Gloss Color",
    "reason.layered": "レイヤーカットの参考に近い実績が豊富です。",
    "reason.walk": "ホンデ徒歩7分 + 外国人対応実績が豊富。",
    "reason.color": "ツヤカラーの実績と外国人レビューが多いです。",
    "reason.perm": "柔らかいパーマの仕上がりが豊富。",
    "region.myeongdong": "ミョンドン",
    "region.hongdae": "ホンデ",
    "region.itaewon": "イテウォン",
    "success.message":
      "予約が確定しました。{salon}で{date} {time}にお会いしましょう。30分以内に連絡します。",
  },
  zh: {
    "brand.tag": "Beauty concierge for travelers",
    "nav.about": "服务介绍",
    "nav.partners": "合作咨询",
    "nav.language": "语言",
    "hero.eyebrow": "Foreigner-friendly booking",
    "hero.title": "不用纠结，立即匹配最适合你风格的首尔美业店并完成预约。",
    "hero.lead": "输入时间、区域和想要的风格，我们会快速匹配可接待外宾的认证店。",
    "metric.salons": "认证店铺",
    "metric.languages": "使用国家",
    "metric.rating": "满意度",
    "form.kicker": "1分钟填写 → 即刻推荐",
    "form.title": "快速推荐",
    "form.subtitle": "没有照片也没关系，描述想要的感觉即可。",
    "form.region": "想在哪里做？",
    "form.regionPlaceholder": "选择区域",
    "form.neighborhood": "详细位置 (如 弘大)",
    "form.date": "想什么时候？",
    "form.time": "偏好时间段",
    "form.timePlaceholder": "例如 14–18 点 (时间由设计师确认)",
    "form.service": "想要的项目",
    "service.cut": "剪发",
    "service.color": "染发",
    "service.perm": "烫发",
    "service.spa": "头皮护理",
    "service.makeup": "化妆",
    "form.image": "参考风格 (可选)",
    "form.imagePlaceholder": "图片预览",
    "form.imageHint": "可提供 Pinterest/Instagram 链接",
    "form.styleHeading": "请用自己的话描述想要的风格。",
    "form.noExplain": "到店无需再说明。",
    "form.notes": "备注",
    "form.notesPlaceholder": "例: English support needed / allergy / no bleaching",
    "form.submit": "立即推荐",
    "form.note": "平均响应: 2小时",
    "results.title": "推荐沙龙",
    "results.badge": "Foreigner-friendly booking",
    "results.subtitle": "已为你挑选最接近条件的店铺。",
    "results.alt": "若首选不可用，是否推荐相似风格？",
    "results.altYes": "Yes",
    "results.altNo": "No",
    "results.placeholderTitle": "推荐结果将在这里显示。",
    "results.placeholderBody": "选择区域与时间后点击推荐。",
    "results.emptyTitle": "该区域暂无推荐店铺。",
    "results.emptyBody": "请尝试其他区域或日期。",
    "results.requiredTitle": "请先填写必填信息。",
    "results.requiredBody": "需要区域、日期和时间才能推荐。",
    "steps.title": "预约流程",
    "steps.subtitle": "Frix 帮你减轻纠结并代为确认预约。",
    "steps.one": "风格 & 日程填写",
    "steps.oneBody": "仅需风格(或图片)+日程",
    "steps.two": "最佳店铺匹配",
    "steps.twoBody": "从认证店中匹配最合适",
    "steps.three": "Frix 确认预约",
    "steps.threeBody": "语言与预约沟通一并处理",
    "modal.close": "关闭",
    "modal.title": "确认预约",
    "modal.cancel": "取消",
    "modal.next": "继续",
    "modal.back": "返回",
    "payment.title": "支付信息",
    "payment.desc": "支付订金即可确认预约。",
    "payment.name": "姓名",
    "payment.email": "邮箱",
    "payment.phone": "联系方式",
    "payment.card": "卡号后四位",
    "payment.policy": "我同意取消政策。",
    "payment.deposit": "订金",
    "payment.pay": "支付订金",
    "payment.processing": "支付处理中",
    "success.title": "预约完成",
    "success.desc": "确认信息将通过邮箱和短信发送。",
    "success.email": "邮箱",
    "success.sms": "短信",
    "success.resendEmail": "重新发送邮箱",
    "success.resendSms": "重新发送短信",
    "status.ready": "待发送",
    "status.sending": "发送中",
    "status.sent": "已发送",
    "success.done": "完成",
    "card.request": "提交预约",
    "card.map": "Google Maps",
    "card.reason": "推荐理由",
    "tag.foreigner": "可接待外宾",
    "tag.layered": "层次剪",
    "tag.perm": "烫发专家",
    "tag.walk7": "步行7分钟",
    "tag.walk10": "10分钟内",
    "tag.metro": "地铁附近",
    "tag.color": "染发专长",
    "thumb.layered": "Layered Cut",
    "thumb.softperm": "Soft Perm",
    "thumb.color": "Gloss Color",
    "reason.layered": "有大量与层次剪参考相近的作品。",
    "reason.walk": "距弘大步行7分钟，外宾服务经验丰富。",
    "reason.color": "亮泽染发作品多，外宾评价好。",
    "reason.perm": "柔和烫发效果口碑好。",
    "region.myeongdong": "明洞",
    "region.hongdae": "弘大",
    "region.itaewon": "梨泰院",
    "success.message":
      "预约已确认。我们将在{date} {time}于{salon}见面，顾问会在30分钟内联系你。",
  },
};

const localeMap = {
  ko: "ko-KR",
  en: "en-US",
  ja: "ja-JP",
  zh: "zh-CN",
};

const pricing = {
  myeongdong: {
    ko: { currency: "KRW", amount: 20000 },
    en: { currency: "USD", amount: 25 },
    ja: { currency: "JPY", amount: 2500 },
    zh: { currency: "CNY", amount: 140 },
  },
  hongdae: {
    ko: { currency: "KRW", amount: 18000 },
    en: { currency: "USD", amount: 22 },
    ja: { currency: "JPY", amount: 2200 },
    zh: { currency: "CNY", amount: 120 },
  },
  itaewon: {
    ko: { currency: "KRW", amount: 22000 },
    en: { currency: "USD", amount: 28 },
    ja: { currency: "JPY", amount: 2800 },
    zh: { currency: "CNY", amount: 160 },
  },
};

const form = document.getElementById("booking-form");
const resultsGrid = document.getElementById("results-grid");
const imageInput = document.getElementById("style-image");
const imagePreview = document.getElementById("image-preview");
const modal = document.getElementById("booking-modal");
const modalSummary = document.getElementById("modal-summary");
const closeModal = document.getElementById("close-modal");
const cancelBooking = document.getElementById("cancel-booking");
const confirmBooking = document.getElementById("confirm-booking");
const backToConfirm = document.getElementById("back-to-confirm");
const payNow = document.getElementById("pay-now");
const finishBooking = document.getElementById("finish-booking");
const modalSteps = Array.from(document.querySelectorAll(".modal-step"));
const successMessage = document.getElementById("success-message");
const paymentForm = document.getElementById("payment-form");
const depositAmount = document.getElementById("deposit-amount");
const emailStatus = document.getElementById("email-status");
const smsStatus = document.getElementById("sms-status");
const resendEmail = document.getElementById("resend-email");
const resendSms = document.getElementById("resend-sms");
const paymentName = document.getElementById("payment-name");
const paymentEmail = document.getElementById("payment-email");
const paymentPhone = document.getElementById("payment-phone");
const regionSelect = document.getElementById("region");
const languageSelect = document.getElementById("language");
const serviceChips = document.querySelectorAll("#service-type .chip");
const altChoiceButtons = document.querySelectorAll(".alt-actions .chip");

const state = {
  lang: "ko",
  selectedService: "cut",
  selectedSalon: null,
  lastInputs: null,
  lastResults: [],
  altAllow: true,
  deposit: null,
  confirmations: {
    email: null,
    sms: null,
  },
};

function t(key) {
  return i18n[state.lang][key] || key;
}

function formatCurrency(amount, currency) {
  return new Intl.NumberFormat(localeMap[state.lang], {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

function getDeposit(region) {
  if (!region || !pricing[region]) return null;
  return pricing[region][state.lang] || pricing[region].ko;
}

function updateDepositDisplay() {
  const region = regionSelect.value;
  const deposit = getDeposit(region);
  state.deposit = deposit;
  if (!deposit) {
    depositAmount.textContent = "-";
    return;
  }
  depositAmount.textContent = formatCurrency(deposit.amount, deposit.currency);
}

function updateConfirmationStatus() {
  emailStatus.textContent = state.confirmations.email
    ? t(state.confirmations.email)
    : t("status.ready");
  smsStatus.textContent = state.confirmations.sms
    ? t(state.confirmations.sms)
    : t("status.ready");
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  document.documentElement.setAttribute("lang", state.lang);
  updateDynamicText();
  updateDepositDisplay();
  updateConfirmationStatus();
}

function updateDynamicText() {
  if (!imageInput.files.length) {
    imagePreview.innerHTML = `<p>${t("form.imagePlaceholder")}</p>`;
  }

  if (state.lastInputs && state.lastResults.length) {
    renderResults(state.lastResults, state.lastInputs);
  }

  if (state.selectedSalon && state.lastInputs) {
    modalSummary.textContent = buildSummary(state.selectedSalon, state.lastInputs);
  }

  if (state.selectedSalon && state.lastInputs) {
    successMessage.textContent = buildSuccess(state.selectedSalon, state.lastInputs);
  }
}

function serviceLabel(serviceKey) {
  return t(`service.${serviceKey}`);
}

serviceChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    serviceChips.forEach((btn) => btn.classList.remove("active"));
    chip.classList.add("active");
    state.selectedService = chip.dataset.value;
  });
});

altChoiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    altChoiceButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    state.altAllow = button.dataset.choice === "yes";
  });
});

languageSelect.addEventListener("change", (event) => {
  state.lang = event.target.value;
  applyTranslations();
});

regionSelect.addEventListener("change", () => {
  updateDepositDisplay();
});

imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    imagePreview.innerHTML = `<p>${t("form.imagePlaceholder")}</p>`;
    return;
  }
  const url = URL.createObjectURL(file);
  imagePreview.innerHTML = `<img src="${url}" alt="업로드된 스타일 이미지">`;
});

function buildSummary(salon, inputs) {
  const location = inputs.neighborhood || t(salon.areaKey);
  const service = serviceLabel(state.selectedService);
  return `${salon.name} · ${location} · ${inputs.date} ${inputs.time} · ${service}`;
}

function buildSuccess(salon, inputs) {
  return t("success.message")
    .replace("{salon}", salon.name)
    .replace("{date}", inputs.date)
    .replace("{time}", inputs.time);
}

function buildCard(salon, inputs) {
  const card = document.createElement("article");
  card.className = "salon-card";
  card.innerHTML = `
    <div class="card-thumb">${t(salon.thumbKey)}</div>
    <h3>${salon.name} · ${t(salon.areaKey)}</h3>
    <span class="reason-label">${t("card.reason")}</span>
    <p class="card-reason">${t(salon.reasonKey)}</p>
    <div class="card-tags">
      ${salon.tags.map((tag) => `<span class="tag">${t(tag)}</span>`).join("")}
    </div>
    <div class="card-actions">
      <button class="primary book" data-id="${salon.id}">${t("card.request")}</button>
      <button class="ghost map" data-id="${salon.id}">${t("card.map")}</button>
    </div>
  `;

  const button = card.querySelector(".book");
  const mapButton = card.querySelector(".map");
  button.addEventListener("click", () => {
    state.selectedSalon = salon;
    state.lastInputs = inputs;
    state.confirmations = { email: null, sms: null };
    modalSummary.textContent = buildSummary(salon, inputs);
    successMessage.textContent = buildSuccess(salon, inputs);
    updateConfirmationStatus();
    updateDepositDisplay();
    showStep(1);
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });

  mapButton.addEventListener("click", () => {
    const query = encodeURIComponent(`${salon.name} ${salon.area}`);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(mapUrl, "_blank", "noopener");
  });

  return card;
}

function renderResults(items, inputs) {
  resultsGrid.innerHTML = "";
  if (items.length === 0) {
    resultsGrid.innerHTML = `
      <div class="placeholder">
        <h3>${t("results.emptyTitle")}</h3>
        <p>${t("results.emptyBody")}</p>
      </div>
    `;
    return;
  }

  items.forEach((item) => {
    resultsGrid.appendChild(buildCard(item, inputs));
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const region = document.getElementById("region").value;
  const neighborhood = document.getElementById("neighborhood").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!region || !date || !time) {
    resultsGrid.innerHTML = `
      <div class="placeholder">
        <h3>${t("results.requiredTitle")}</h3>
        <p>${t("results.requiredBody")}</p>
      </div>
    `;
    return;
  }

  const filtered = salons
    .filter((salon) => salon.region === region)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  state.lastInputs = { region, neighborhood, date, time };
  state.lastResults = filtered;
  renderResults(filtered, state.lastInputs);
  document.getElementById("results").scrollIntoView({ behavior: "smooth" });
});

function showStep(stepNumber) {
  modalSteps.forEach((step) => {
    step.classList.toggle(
      "is-active",
      Number(step.dataset.step) === stepNumber
    );
  });
}

function setConfirmationStatus(channel, statusKey) {
  state.confirmations[channel] = statusKey;
  updateConfirmationStatus();
}

function fakePaymentAPI(payload) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ok: true, id: `PAY-${Date.now()}`, payload });
    }, 800);
  });
}

function fakeSendConfirmationAPI(channel, payload) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ ok: true, channel, sentAt: new Date().toISOString(), payload });
    }, 600);
  });
}

async function sendConfirmations() {
  setConfirmationStatus("email", "status.sending");
  setConfirmationStatus("sms", "status.sending");
  await Promise.all([
    fakeSendConfirmationAPI("email", {
      email: paymentEmail.value,
      salon: state.selectedSalon?.name,
    }),
    fakeSendConfirmationAPI("sms", {
      phone: paymentPhone.value,
      salon: state.selectedSalon?.name,
    }),
  ]);
  setConfirmationStatus("email", "status.sent");
  setConfirmationStatus("sms", "status.sent");
}

function closeBookingModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

function resetPaymentForm() {
  paymentForm.reset();
  state.confirmations = { email: null, sms: null };
  updateConfirmationStatus();
}

closeModal.addEventListener("click", () => {
  closeBookingModal();
  resetPaymentForm();
});

cancelBooking.addEventListener("click", () => {
  closeBookingModal();
  resetPaymentForm();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeBookingModal();
    resetPaymentForm();
  }
});

confirmBooking.addEventListener("click", () => {
  if (!state.selectedSalon) return;
  showStep(2);
});

backToConfirm.addEventListener("click", () => {
  showStep(1);
});

payNow.addEventListener("click", () => {
  if (!paymentForm.reportValidity()) return;
  if (!state.selectedSalon || !state.lastInputs) return;
  const originalLabel = payNow.textContent;
  payNow.disabled = true;
  payNow.textContent = t("payment.processing");
  fakePaymentAPI({
    salonId: state.selectedSalon.id,
    service: state.selectedService,
    name: paymentName.value,
    email: paymentEmail.value,
    phone: paymentPhone.value,
    deposit: state.deposit,
  }).then(() => {
    showStep(3);
    sendConfirmations();
  }).finally(() => {
    payNow.disabled = false;
    payNow.textContent = originalLabel;
  });
});

finishBooking.addEventListener("click", () => {
  closeBookingModal();
  resetPaymentForm();
});

resendEmail.addEventListener("click", () => {
  if (!paymentEmail.value) return;
  setConfirmationStatus("email", "status.sending");
  fakeSendConfirmationAPI("email", {
    email: paymentEmail.value,
    salon: state.selectedSalon?.name,
  }).then(() => {
    setConfirmationStatus("email", "status.sent");
  });
});

resendSms.addEventListener("click", () => {
  if (!paymentPhone.value) return;
  setConfirmationStatus("sms", "status.sending");
  fakeSendConfirmationAPI("sms", {
    phone: paymentPhone.value,
    salon: state.selectedSalon?.name,
  }).then(() => {
    setConfirmationStatus("sms", "status.sent");
  });
});

applyTranslations();
