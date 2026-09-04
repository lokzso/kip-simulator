const APP_VERSION="4.2.0";

const $ = s => document.querySelector(s);
const app = document.getElementById('app');

const DB = {
lessons:[
["Основы электричества","Напряжение U измеряется в вольтах. Ток I — в амперах. Сопротивление R — в омах. Закон Ома: U=I×R.","В цепи 24 В и 12 Ω. Ток?","2 А",["1 А","2 А","12 А"]],
["DC и AC","DC — постоянный ток, AC — переменный. В автоматике часто используют 24 V DC; в силовых цепях — 230/400 V AC.","Что типично для питания датчиков?","24 V DC",["24 V DC","10 кВ","USB"]],
["4–20 мА","4 мА = 0%, 12 мА = 50%, 20 мА = 100%. Нулевой ток часто указывает на обрыв или потерю питания.","16 мА — это?","75%",["25%","50%","75%"]],
["0–10 В и дискретные сигналы","Аналоговый 0–10 В передаёт непрерывное значение. Дискретный сигнал имеет два логических состояния.","Какой сигнал непрерывный?","0–10 В",["Сухой контакт","0–10 В","Кнопка"]],
["Реле","Катушка реле переключает НО/НЗ контакты. НО разомкнут без питания катушки, НЗ — замкнут.","Какой контакт замкнут без питания?","НЗ",["НО","НЗ","PE"]],
["Контактор","Контактор — электромагнитный аппарат для коммутации силовой нагрузки. Катушка часто обозначается A1/A2.","Что обычно обозначают A1/A2?","Катушку",["Катушку","Заземление","Предохранитель"]],
["Автомат","Автоматический выключатель защищает проводку от перегрузки и короткого замыкания.","От чего защищает автомат?","Перегрузка и КЗ",["Только от воды","Перегрузка и КЗ","От низкого напряжения"]],
["Предохранитель","Плавкая вставка разрывает цепь при превышении допустимого тока. После срабатывания обычно требует замены.","На входе 24 В, на выходе 0 В. Что вероятно?","Предохранитель оборван",["Всё нормально","Предохранитель оборван","Лампа слишком яркая"]],
["Мультиметр: напряжение","Напряжение измеряют параллельно точкам цепи. Для DC важна полярность.","-24 В на дисплее означает?","Щупы поменяны местами",["КЗ","Щупы поменяны местами","Ноль"]],
["Мультиметр: ток","Ток измеряют последовательно, включая прибор в разрыв цепи.","Как включают амперметр?","Последовательно",["Параллельно","Последовательно","К корпусу"]],
["Мультиметр: сопротивление","Сопротивление и прозвонку измеряют на обесточенной цепи.","Можно мерить Ω под напряжением?","Нет",["Да","Нет","Только 24 В"]],
["Датчики","Датчики измеряют давление, температуру, уровень, расход и преобразуют величину в электрический сигнал.","Что делает датчик?","Преобразует величину в сигнал",["Только светится","Преобразует величину в сигнал","Всегда включает двигатель"]],
["Температурные датчики","RTD изменяет сопротивление с температурой; термопара создаёт малое напряжение, зависящее от температуры.","Что изменяет RTD?","Сопротивление",["Частоту Wi‑Fi","Сопротивление","Цвет"]],
["Датчики давления","Преобразователь давления может выдавать 4–20 мА пропорционально измеряемому давлению.","Датчик 0–10 бар выдаёт 12 мА. Давление?","5 бар",["2.5 бар","5 бар","10 бар"]],
["Уровень","Уровнемеры бывают гидростатические, радарные, ультразвуковые и др. Выход часто 4–20 мА.","20 мА для диапазона 0–6 м это?","6 м",["0 м","3 м","6 м"]],
["Расход","Расходомеры могут измерять объёмный или массовый расход. Часто применяются импульсные и аналоговые выходы.","Импульсный выход может передавать?","Количество/частоту",["Только температуру","Количество/частоту","Пароль"]],
["Схемы","Читайте цепь от источника: питание → защита → управление → исполнительный элемент → возврат.","С чего начать поиск пропавшего питания?","С источника",["С лампы","С источника","Со случайного провода"]],
["НО/НЗ логика","НО контакт замыкается при срабатывании, НЗ размыкается. Это используется в блокировках и аварийных цепях.","Для аварийного стопа часто выбирают НЗ, потому что?","Обрыв тоже обнаружится",["Так красивее","Обрыв тоже обнаружится","Меньше проводов"]],
["PE и безопасность","PE — защитный проводник. Работы на реальном оборудовании выполняют только по действующим правилам предприятия и электробезопасности.","PE — это?","Защитный проводник",["Фаза","Защитный проводник","Сигнал 4–20"]],
["Диагностика","Ищите неисправность по шагам: симптом → питание → защита → вход → логика → выход → проводка → нагрузка.","На катушке реле есть номинальное напряжение, но оно не срабатывает. Вероятно?","Катушка/реле",["Источник до автомата","Катушка/реле","PE"]]
],
tasks:[
["Лампа не горит","До кнопки 24 В, после кнопки при нажатии 0 В.","Неисправна кнопка",["Нет питания","Неисправна кнопка","Сгорел PE"]],
["Обрыв 4–20 мА","В токовой петле внезапно 0 мА.","Обрыв/нет питания",["100% шкалы","Обрыв/нет питания","50% шкалы"]],
["Давление 0–16 бар","Сигнал датчика 8 мА.","4 бар",["2 бар","4 бар","8 бар"]],
["Температура 0–200°C","Сигнал 12 мА.","100°C",["50°C","100°C","150°C"]],
["Уровень 0–5 м","Сигнал 20 мА.","5 м",["0 м","2.5 м","5 м"]],
["Предохранитель","Вход 24 В, выход 0 В.","Проверить/заменить предохранитель",["Проверить лампу","Проверить/заменить предохранитель","Убрать заземление"]],
["Катушка реле","На A1/A2 24 В, реле не переключает контакты.","Проверить катушку/механику",["Искать питание до источника","Проверить катушку/механику","Заменить автомат"]],
["Контактор дребезжит","Напряжение катушки заметно ниже номинального.","Проверить питание катушки и соединения",["Сразу убрать PE","Проверить питание катушки и соединения","Замкнуть контакты вручную"]],
["Автомат сразу отключается","При подаче питания автомат мгновенно срабатывает.","Искать КЗ/аномально большой ток",["Искать КЗ/аномально большой ток","Это нормально","Повысить напряжение"]],
["Минус на мультиметре","При DC измерении показано -24.0 V.","Поменять щупы местами",["Поменять щупы местами","Поставить Ω","Замкнуть щупы"]],
["Прозвонка","Нужно проверить целостность отключённого провода.","Режим continuity/Ω",["AC 600 V","Режим continuity/Ω","Измерение тока"]],
["НО контакт","Катушка реле обесточена.","НО разомкнут",["НО замкнут","НО разомкнут","Всегда 24 В"]],
["НЗ контакт","Катушка реле обесточена.","НЗ замкнут",["НЗ замкнут","НЗ разомкнут","Он отсутствует"]],
["Кнопка ПУСК","Нужно сделать самоподхват контактора.","Использовать вспомогательный НО контакт параллельно ПУСК",["Замкнуть PE","Использовать вспомогательный НО контакт параллельно ПУСК","Убрать СТОП"]],
["Аварийный СТОП","Почему в цепях останова часто применяют НЗ контакт?","Обрыв провода тоже даст останов",["Чтобы увеличить ток","Обрыв провода тоже даст останов","Чтобы лампа ярче горела"]],
["Датчик не меняет 4 мА","Процесс меняется, но выход датчика постоянно 4 мА.","Проверить датчик, импульсную линию и настройку",["Это всегда норма","Проверить датчик, импульсную линию и настройку","Заменить PE"]],
["0–10 В","Сигнал 7.5 В в диапазоне 0–100%.","75%",["25%","50%","75%"]],
["Резистор 250 Ω","Через 250 Ω проходит 20 мА.","5 В",["1 В","5 В","20 В"]],
["Мощность","Нагрузка 24 В, ток 0.5 А.","12 Вт",["6 Вт","12 Вт","48 Вт"]],
["Сопротивление","12 В, 2 А.","6 Ω",["6 Ω","12 Ω","24 Ω"]],
["Потеря 0V","На плюсе нагрузки +24 В, но возврат 0V оборван.","Ток не течёт",["Ток не течёт","Мощность растёт","Всё работает"]],
["Датчик PNP","Выход PNP обычно подаёт плюс питания на вход.","Проверить общую землю и вход",["Проверить общую землю и вход","Убрать питание","Замкнуть PE"]],
["Датчик NPN","Выход NPN обычно коммутирует нагрузку/вход к 0V.","Проверить схему входа и общий 0V",["Подать 400 В","Проверить схему входа и общий 0V","Убрать датчик"]],
["Частотный выход","Частота растёт вместе с расходом.","Рост частоты означает рост измеряемой величины",["Рост частоты означает рост измеряемой величины","Это всегда неисправность","Частота не связана с процессом"]],
["Обрыв термосопротивления","RTD показывает очень большое/аварийное значение.","Проверить обрыв цепи датчика",["Проверить обрыв цепи датчика","Подать 230 В","Снять PE"]],
["Перепутана полярность датчика","Датчик 2-проводный 4–20 мА не запускается после монтажа.","Проверить полярность и питание",["Проверить полярность и питание","Закоротить вход","Увеличить давление"]],
["Реле не отпускает","Катушка обесточена, контакт остаётся замкнут.","Возможен залипший контакт",["Возможен залипший контакт","Не хватает PE","Нормальная работа"]],
["Лампа горит тускло","На лампе вместо 24 В только 14 В.","Искать падение напряжения/плохой контакт",["Искать падение напряжения/плохой контакт","Заменить PE","Это всегда норма"]],
["Плавающий сигнал","4–20 мА нестабилен при работе мощного двигателя рядом.","Проверить экранирование, землю, трассу и помехи",["Проверить экранирование, землю, трассу и помехи","Повысить до 400 В","Убрать автомат"]],
["Нет сигнала на ПЛК","На выходе датчика ток есть, а вход ПЛК показывает 0.","Проверить цепь входа, клеммы и конфигурацию канала",["Проверить цепь входа, клеммы и конфигурацию канала","Сразу менять датчик","Это невозможно"]]
]};

const handbook = {
"Электрика":["U — напряжение, В","I — ток, А","R — сопротивление, Ω","P — мощность, Вт","U=I×R","P=U×I","DC — постоянный ток","AC — переменный ток"],
"КИП сигналы":["4–20 мА","0–20 мА","0–5 мА","0–10 В","1–5 В","Импульсный","Частотный","Дискретный сухой контакт","HART поверх 4–20 мА — цифровая связь поверх аналогового сигнала"],
"Контакты":["NO/НО — нормально открытый","NC/НЗ — нормально закрытый","COM — общий","A1/A2 — катушка реле/контактора","13-14 — часто НО вспомогательный контакт","21-22 — часто НЗ вспомогательный контакт"],
"Проводники":["L — фаза","N — нейтраль","PE — защитный проводник","+24V и 0V — питание DC автоматики"],
"Мультиметр":["V⎓ — DC","V~ — AC","Ω — сопротивление","🔔 — прозвонка","A/mA — ток","Напряжение — параллельно","Ток — последовательно","Ω/прозвонка — только обесточенная цепь"],
"Датчики":["Температура: RTD, термопара","Давление: преобразователь давления","Уровень: гидростатика, радар, ультразвук","Расход: электромагнитный, вихревой, кориолисовый, дифдавление","Концевик — дискретное положение","Индуктивный — металл","Емкостный — материал/уровень","Фотоэлектрический — объект по свету"],
"Исполнительные устройства":["Реле","Контактор","Соленоидный клапан","Электродвигатель","Лампа","Зуммер","Пневмопривод"],
"Защита":["Автоматический выключатель","Предохранитель","Тепловое реле","УЗО/дифференциальная защита — отдельный тип защиты","PE — защитный проводник"],
"Диагностика":["Подтвердить симптом","Проверить питание","Проверить защиту","Проверить вход","Проверить логику","Проверить выход","Проверить проводку","Проверить нагрузку","Сравнить с исправным каналом/документацией"]
};

const componentCatalog = [
["source24","+24V","source"],["ground","0V","ground"],["battery","Батарея 12V","source"],
["switch","Кнопка НО","switch"],["switchNC","Кнопка НЗ","switch"],["estop","Аварийный STOP","switch"],
["lamp","Лампа","lamp"],["buzzer","Зуммер","load"],["motor","Двигатель","load"],
["relay","Реле","relay"],["contactor","Контактор","relay"],["fuse","Предохранитель","protect"],
["breaker","Автомат","protect"],["thermal","Тепловое реле","protect"],["resistor","Резистор","passive"],
["sensor420","Датчик 4–20 мА","sensor"],["sensor010","Датчик 0–10 В","sensor"],["pressure","Датчик давления","sensor"],
["temp","Датчик температуры","sensor"],["level","Датчик уровня","sensor"],["flow","Расходомер","sensor"],
["limit","Концевик","sensor"],["inductive","Индуктивный датчик","sensor"],["solenoid","Клапан","load"],
["plcIn","Вход ПЛК","plc"],["plcOut","Выход ПЛК","plc"],["ai","Аналоговый вход","plc"],
["ao","Аналоговый выход","plc"],["terminal","Клемма","terminal"],["meter","Вольтметр","meter"],
["ammeter","Амперметр","meter"],["groundPE","PE","ground"]
];


const componentInfo = {
source24:{icon:"⚡",title:"+24V DC источник",kind:"Питание",spec:"24 V DC",io:"+24V / 0V",desc:"Типовой источник питания цепей автоматики.",tip:"Подаёт питание на датчики, реле, ПЛК и исполнительные устройства."},
ground:{icon:"⏚",title:"0V",kind:"Возврат питания",spec:"0 V DC",io:"0V",desc:"Общий провод цепи постоянного тока.",tip:"Используется как возврат для 24 V DC."},
battery:{icon:"🔋",title:"Батарея 12V",kind:"Питание",spec:"12 V DC",io:"+ / −",desc:"Автономный источник постоянного напряжения.",tip:"Подходит для простых учебных DC-цепей."},
switch:{icon:"🔘",title:"Кнопка НО",kind:"Управление",spec:"NO",io:"1–2",desc:"Нормально открытая кнопка.",tip:"Замыкает цепь только при нажатии."},
switchNC:{icon:"⏹️",title:"Кнопка НЗ",kind:"Управление",spec:"NC",io:"1–2",desc:"Нормально закрытая кнопка.",tip:"Размыкает цепь при нажатии."},
estop:{icon:"🛑",title:"Аварийный STOP",kind:"Безопасность",spec:"Обычно NC",io:"11–12",desc:"Кнопка аварийного останова.",tip:"В учебных схемах ставь последовательно в цепь управления."},
lamp:{icon:"💡",title:"Сигнальная лампа",kind:"Нагрузка",spec:"24 V DC",io:"L / 0V",desc:"Световая индикация состояния цепи.",tip:"Загорается при наличии питания на выводах."},
buzzer:{icon:"🔊",title:"Зуммер",kind:"Нагрузка",spec:"24 V DC",io:"+ / −",desc:"Звуковой сигнализатор.",tip:"Используется для аварийной и предупредительной сигнализации."},
motor:{icon:"⚙️",title:"Электродвигатель",kind:"Нагрузка",spec:"Учебная модель",io:"U/V/W",desc:"Исполнительный механизм вращательного типа.",tip:"В реальных схемах обычно включается через контактор и защиту."},
relay:{icon:"🧲",title:"Промежуточное реле",kind:"Коммутация",spec:"Катушка 24 V DC",io:"A1/A2, NO/NC",desc:"Катушка управляет группой контактов.",tip:"Используй для развязки и логики управления."},
contactor:{icon:"🔲",title:"Контактор",kind:"Силовая коммутация",spec:"Катушка 24 V DC",io:"A1/A2 + силовые",desc:"Коммутирует более мощную нагрузку.",tip:"Часто используется для двигателя."},
fuse:{icon:"🧯",title:"Предохранитель",kind:"Защита",spec:"Плавкая защита",io:"IN / OUT",desc:"Разрывает цепь при превышении тока.",tip:"После срабатывания обычно требует замены."},
breaker:{icon:"⏻",title:"Автомат",kind:"Защита",spec:"Перегрузка / КЗ",io:"IN / OUT",desc:"Автоматический выключатель.",tip:"Защищает проводку и нагрузку от аварийного тока."},
thermal:{icon:"🌡️",title:"Тепловое реле",kind:"Защита двигателя",spec:"Перегрузка",io:"Силовая цепь + контакт",desc:"Защищает двигатель от длительной перегрузки.",tip:"Обычно работает совместно с контактором."},
resistor:{icon:"〰️",title:"Резистор",kind:"Пассивный элемент",spec:"R, Ω",io:"1 / 2",desc:"Ограничивает ток и создаёт падение напряжения.",tip:"Для токовой петли 4–20 мА часто встречается 250 Ω."},
sensor420:{icon:"📈",title:"Датчик 4–20 мА",kind:"Аналоговый датчик",spec:"4–20 mA",io:"+ / −",desc:"Передаёт измеряемую величину токовым сигналом.",tip:"4 мА = 0%, 12 мА = 50%, 20 мА = 100%."},
sensor010:{icon:"📉",title:"Датчик 0–10 В",kind:"Аналоговый датчик",spec:"0–10 V",io:"+V / OUT / 0V",desc:"Передаёт измеряемую величину напряжением.",tip:"10 В обычно соответствует 100% диапазона."},
pressure:{icon:"🧭",title:"Датчик давления",kind:"КИП",spec:"Часто 4–20 mA",io:"Питание + сигнал",desc:"Измеряет давление среды.",tip:"Диапазон задаётся паспортом, например 0–10 бар."},
temp:{icon:"🌡️",title:"Датчик температуры",kind:"КИП",spec:"RTD / TC / 4–20 mA",io:"Зависит от типа",desc:"Измеряет температуру.",tip:"RTD меняет сопротивление, термопара создаёт малое напряжение."},
level:{icon:"🫙",title:"Датчик уровня",kind:"КИП",spec:"4–20 mA / дискретный",io:"Питание + выход",desc:"Измеряет уровень жидкости или материала.",tip:"Бывает радарный, гидростатический, ультразвуковой и др."},
flow:{icon:"🌊",title:"Расходомер",kind:"КИП",spec:"4–20 mA / импульс",io:"Питание + выход",desc:"Измеряет расход среды.",tip:"Может выдавать аналоговый, частотный или импульсный сигнал."},
limit:{icon:"📍",title:"Концевой выключатель",kind:"Дискретный датчик",spec:"NO / NC",io:"COM/NO/NC",desc:"Определяет конечное положение механизма.",tip:"Используется для блокировок и подтверждения положения."},
inductive:{icon:"🧲",title:"Индуктивный датчик",kind:"Датчик приближения",spec:"PNP/NPN",io:"+V / OUT / 0V",desc:"Обнаруживает металлические объекты.",tip:"Проверь тип выхода PNP/NPN перед подключением к ПЛК."},
solenoid:{icon:"🚰",title:"Соленоидный клапан",kind:"Исполнительный механизм",spec:"24 V DC",io:"A1/A2",desc:"Электромагнитно открывает или закрывает поток.",tip:"Часто управляется выходом ПЛК через реле."},
plcIn:{icon:"⬅️",title:"Дискретный вход ПЛК",kind:"ПЛК",spec:"24 V DC",io:"IN / COM",desc:"Принимает сигнал от кнопки или датчика.",tip:"Проверь общий провод и тип входа."},
plcOut:{icon:"➡️",title:"Дискретный выход ПЛК",kind:"ПЛК",spec:"24 V DC",io:"OUT / COM",desc:"Управляет внешней нагрузкой.",tip:"Нагрузку выбирай по допустимому току выхода."},
ai:{icon:"📊",title:"Аналоговый вход ПЛК",kind:"ПЛК",spec:"4–20 mA / 0–10 V",io:"AI+ / AI−",desc:"Принимает аналоговый измерительный сигнал.",tip:"Важно правильно выбрать тип канала и схему подключения."},
ao:{icon:"🎚️",title:"Аналоговый выход ПЛК",kind:"ПЛК",spec:"4–20 mA / 0–10 V",io:"AO+ / AO−",desc:"Формирует аналоговый управляющий сигнал.",tip:"Используется для частотников, клапанов и преобразователей."},
terminal:{icon:"🔩",title:"Клемма",kind:"Соединение",spec:"Проходная",io:"1 / 2",desc:"Точка соединения проводников.",tip:"Удобна для разветвления и обслуживания схемы."},
meter:{icon:"📟",title:"Вольтметр",kind:"Измерение",spec:"V",io:"COM / V",desc:"Измеряет напряжение между двумя точками.",tip:"Подключается параллельно."},
ammeter:{icon:"🧪",title:"Амперметр",kind:"Измерение",spec:"A / mA",io:"COM / A",desc:"Измеряет ток цепи.",tip:"Подключается последовательно в разрыв цепи."},
groundPE:{icon:"🟢",title:"PE",kind:"Защитное заземление",spec:"Protective Earth",io:"PE",desc:"Защитный проводник оборудования.",tip:"Не используй PE как рабочий 0V."}
};

const schemes = [
["Лампа через кнопку",["source24","switch","lamp","ground"],[["source24","switch"],["switch","lamp"],["lamp","ground"]],"Простейшая цепь управления лампой кнопкой НО."],
["Лампа через НЗ STOP",["source24","switchNC","lamp","ground"],[["source24","switchNC"],["switchNC","lamp"],["lamp","ground"]],"Лампа питается через нормально закрытый контакт."],
["Реле и лампа",["source24","switch","relay","lamp","ground"],[["source24","switch"],["switch","relay"],["relay","ground"],["source24","lamp"],["lamp","ground"]],"Учебная цепь катушки реле и сигнальной лампы."],
["Контактор и двигатель",["source24","estop","switch","contactor","thermal","motor","ground"],[["source24","estop"],["estop","switch"],["switch","contactor"],["contactor","ground"],["source24","thermal"],["thermal","motor"],["motor","ground"]],"Упрощённый пуск двигателя через контактор и тепловую защиту."],
["Токовая петля 4–20 мА",["source24","sensor420","ai","ground"],[["source24","sensor420"],["sensor420","ai"],["ai","ground"]],"Классическая двухпроводная токовая петля датчика на аналоговый вход."],
["0–10 В в ПЛК",["source24","sensor010","ai","ground"],[["source24","sensor010"],["sensor010","ai"],["ai","ground"]],"Датчик напряжения 0–10 В на аналоговый вход ПЛК."],
["Предохранитель и нагрузка",["source24","fuse","switch","lamp","ground"],[["source24","fuse"],["fuse","switch"],["switch","lamp"],["lamp","ground"]],"Цепь нагрузки с плавкой защитой."],
["Автомат и двигатель",["source24","breaker","contactor","thermal","motor","ground"],[["source24","breaker"],["breaker","contactor"],["contactor","thermal"],["thermal","motor"],["motor","ground"]],"Учебная силовая цепь с автоматом, контактором и тепловым реле."],
["Датчик → ПЛК → клапан",["source24","sensor420","ai","plcOut","solenoid","ground"],[["source24","sensor420"],["sensor420","ai"],["ai","ground"],["plcOut","solenoid"],["solenoid","ground"]],"Измерение аналогового сигнала и управление соленоидным клапаном."],
["Концевик на вход ПЛК",["source24","limit","plcIn","ground"],[["source24","limit"],["limit","plcIn"],["plcIn","ground"]],"Дискретный концевой выключатель на вход контроллера."],

["ПУСК двигателя",["source24","breaker","estop","switch","contactor","thermal","motor","ground"],[["source24","breaker"],["breaker","estop"],["estop","switch"],["switch","contactor"],["contactor","ground"],["breaker","thermal"],["thermal","motor"],["motor","ground"]],"Базовая схема ПУСК с аварийным STOP и защитой."],
["ПУСК/СТОП с самоподхватом",["source24","breaker","switchNC","switch","contactor","relay","thermal","motor","ground"],[["source24","breaker"],["breaker","switchNC"],["switchNC","switch"],["switch","contactor"],["contactor","relay"],["relay","ground"],["breaker","thermal"],["thermal","motor"],["motor","ground"]],"Учебный шаблон самоподхвата через вспомогательный контакт."],
["Аварийная лампа через реле",["source24","sensor420","ai","relay","lamp","ground"],[["source24","sensor420"],["sensor420","ai"],["ai","ground"],["source24","relay"],["relay","lamp"],["lamp","ground"]],"Аналоговый датчик и отдельная цепь аварийной индикации."],
["Зуммер аварии",["source24","estop","relay","buzzer","ground"],[["source24","estop"],["estop","relay"],["relay","buzzer"],["buzzer","ground"]],"Простая цепь звуковой аварийной сигнализации."],
["Индуктивный датчик → ПЛК",["source24","inductive","plcIn","ground"],[["source24","inductive"],["inductive","plcIn"],["plcIn","ground"]],"Трёхпроводный датчик приближения на дискретный вход."],
["ПЛК → контактор → двигатель",["source24","plcOut","relay","contactor","thermal","motor","ground"],[["source24","plcOut"],["plcOut","relay"],["relay","contactor"],["contactor","ground"],["source24","thermal"],["thermal","motor"],["motor","ground"]],"Дискретный выход ПЛК управляет промежуточным реле и контактором."],
["ПЛК → клапан",["source24","plcOut","relay","solenoid","ground"],[["source24","plcOut"],["plcOut","relay"],["relay","solenoid"],["solenoid","ground"]],"Управление электромагнитным клапаном через промежуточное реле."],
["Датчик давления 4–20 мА",["source24","pressure","ai","ground"],[["source24","pressure"],["pressure","ai"],["ai","ground"]],"Преобразователь давления на аналоговый вход."],
["Датчик температуры 4–20 мА",["source24","temp","ai","ground"],[["source24","temp"],["temp","ai"],["ai","ground"]],"Температурный преобразователь с токовым выходом."],
["Датчик уровня 4–20 мА",["source24","level","ai","ground"],[["source24","level"],["level","ai"],["ai","ground"]],"Уровнемер на аналоговый вход ПЛК."],
["Расходомер 4–20 мА",["source24","flow","ai","ground"],[["source24","flow"],["flow","ai"],["ai","ground"]],"Расходомер с аналоговым выходом."],
["Аналоговый выход → клапан",["source24","ao","solenoid","ground"],[["source24","ao"],["ao","solenoid"],["solenoid","ground"]],"Упрощённая схема аналогового управления исполнительным механизмом."],
["Измерение напряжения",["source24","switch","lamp","meter","ground"],[["source24","switch"],["switch","lamp"],["lamp","ground"],["source24","meter"],["meter","ground"]],"Вольтметр подключён параллельно источнику/нагрузке."],
["Измерение тока",["source24","ammeter","switch","lamp","ground"],[["source24","ammeter"],["ammeter","switch"],["switch","lamp"],["lamp","ground"]],"Амперметр последовательно включён в цепь нагрузки."],
["Резистор 250 Ω в токовой петле",["source24","sensor420","resistor","ai","ground"],[["source24","sensor420"],["sensor420","resistor"],["resistor","ai"],["ai","ground"]],"Учебный пример токовой петли с резистором 250 Ω."],
["Клеммная сборка 24 В",["source24","fuse","terminal","switch","lamp","ground"],[["source24","fuse"],["fuse","terminal"],["terminal","switch"],["switch","lamp"],["lamp","ground"]],"Пример цепи через клеммник и предохранитель."],
["Аварийный STOP двигателя",["source24","estop","contactor","thermal","motor","ground"],[["source24","estop"],["estop","contactor"],["contactor","ground"],["source24","thermal"],["thermal","motor"],["motor","ground"]],"НЗ аварийный контакт в цепи управления контактором."],
["Два уровня: датчик и сигнализация",["source24","level","ai","relay","buzzer","ground"],[["source24","level"],["level","ai"],["ai","ground"],["source24","relay"],["relay","buzzer"],["buzzer","ground"]],"Контроль уровня и отдельная аварийная сигнализация."],
["Концевик → реле → лампа",["source24","limit","relay","lamp","ground"],[["source24","limit"],["limit","relay"],["relay","lamp"],["lamp","ground"]],"Концевой выключатель включает реле и световую индикацию."],
["Автомат → предохранитель → реле",["source24","breaker","fuse","switch","relay","lamp","ground"],[["source24","breaker"],["breaker","fuse"],["fuse","switch"],["switch","relay"],["relay","lamp"],["lamp","ground"]],"Комбинированная учебная цепь защиты и управления."]
];

let state = JSON.parse(localStorage.getItem("kipState")||'{"xp":0,"lessons":0,"tasks":0,"level":1}');
function save(){ state.level=1+Math.floor(state.xp/100); localStorage.setItem("kipState",JSON.stringify(state)); }
function shell(title,body,back=true){
 app.innerHTML=`<div class="shell page-enter"><div class="topbar">${back?'<button class="btn back" onclick="home()">←</button>':''}<div><div class="title">${title}</div></div></div>${body}</div>`;
}
function home(){
 const pct=Math.min(100,state.xp%100);
 shell("KIP & Electrician",`
 <div class="card"><b>Уровень ${state.level}</b><div class="sub">XP ${state.xp} • уроков ${state.lessons}/${DB.lessons.length} • заданий ${state.tasks}</div><div class="progress"><i style="width:${pct}%"></i></div></div>
 <div class="grid">
 ${menu("🎓","Обучение","20 уроков","lessonsPage()")}
 ${menu("🧪","Практика","уроки прямо в схемах","practicalLessonsPage()")}
 ${menu("🧰","Песочница","30+ элементов","sandboxPage()")}
 ${menu("🔌","Готовые схемы",`${schemes.length} шаблонов`,"schemesPage()")}
 ${menu("🔧","Задания","30 неисправностей","tasksPage()")}
 ${menu("🧑‍🔧","Рабочая смена","случайные заявки","workShiftPage()")}
 ${menu("⚡","Экзамен","10 случайных вопросов","examPage()")}
 ${menu("📟","Мультиметр","режимы измерений","multimeterPage()")}
 ${menu("📚","Справочник","КИП + электрика","handbookPage()")}
 ${menu("🧮","Калькуляторы","4–20 мА, Ом, мощность","calculatorsPage()")}
 ${menu("🏭","Техпроцесс","бак, насос, датчики","processPage()")}
 ${menu("📈","Прогресс","статистика","progressPage()")}
 ${menu("⬆️","Обновление",`Версия ${APP_VERSION}`,"updatePage()")}
 </div>`,false);
}
function menu(ic,t,s,fn){return `<button class="menu-btn" onclick="${fn}"><div class="icon">${ic}</div><b>${t}</b><span>${s}</span></button>`}


function practicalLessonsPage(){
 const ps=[
  ["Подключи лампу","Собери +24V → кнопка НО → лампа → 0V",0],
  ["Токовая петля","Собери +24V → датчик 4–20 мА → AI → 0V",4],
  ["Пуск двигателя","Открой готовую схему ПУСК и запусти цепь",10]
 ];
 shell("Практические уроки",ps.map((p,i)=>`<div class="card"><h3>${p[0]}</h3><p>${p[1]}</p><button class="btn primary wide" onclick="startPractical(${i})">Начать</button></div>`).join(""));
}
function startPractical(i){
 const map=[0,4,10];loadScheme(map[i]);localStorage.setItem("kipPractical",String(i));status("Практический урок: собери/проверь схему и включи питание.");
}

function lessonsPage(){
 shell("Обучение",DB.lessons.map((l,i)=>`<button class="btn wide" onclick="lesson(${i})">${i<state.lessons?'✓':'▶'} ${i+1}. ${l[0]}</button>`).join(""));
}
function lesson(i){
 const l=DB.lessons[i];
 shell(`Урок ${i+1}`,`<div class="card"><h3>${l[0]}</h3><p>${l[1]}</p></div><div class="section-title">Проверка</div><div class="card">${l[2]}</div>${l[4].map(a=>`<button class="btn answer" onclick='lessonAnswer(${i},${JSON.stringify(a)})'>${a}</button>`).join("")}`);
}
function lessonAnswer(i,a){
 const l=DB.lessons[i]; const ok=a===l[3];
 if(ok){state.xp+=20;state.lessons=Math.max(state.lessons,i+1);save();}
 shell(ok?"Верно":"Ошибка",`<div class="card"><h3>${ok?"+20 XP":"Попробуй ещё"}</h3><p>Правильный ответ: <b>${l[3]}</b></p></div><button class="btn primary wide" onclick="${ok?'lessonsPage()':`lesson(${i})`}">Продолжить</button>`);
}


function workShiftPage(){
 const cases=[
  ["Насос P-101 не запускается","bad_switch","Оператор: «Нажимаю ПУСК — контактор молчит».","Проверь цепь управления и напряжение до/после кнопки."],
  ["Лампа аварии не горит","open","Индикация пропала после обслуживания.","Ищи обрыв последовательными измерениями."],
  ["Автомат отключается","short","После включения QF1 сразу отключается.","Ищи короткое замыкание или ошибочное соединение."]
 ];
 const c=cases[Math.floor(Math.random()*cases.length)];
 localStorage.setItem("kipWorkCase",JSON.stringify(c));
 shell("Рабочая смена",`<div class="card"><h3>${c[0]}</h3><p>${c[2]}</p></div><button class="btn primary wide" onclick="startWorkCase()">Принять заявку</button>`);
}
function startWorkCase(){
 const c=JSON.parse(localStorage.getItem("kipWorkCase")||"null");if(!c)return;
 loadScheme(10);sb.fault=c[1];status("Заявка активна. "+(sb.mode==="novice"?c[3]:"Диагностируй неисправность."));
}

function tasksPage(){
 shell("Задания",DB.tasks.map((t,i)=>`<button class="btn wide" onclick="task(${i})">${String(i+1).padStart(2,"0")} • ${t[0]}</button>`).join(""));
}
function task(i){
 const t=DB.tasks[i];
 shell(t[0],`<div class="card">${t[1]}</div>${t[3].map(a=>`<button class="btn answer" onclick='taskAnswer(${i},${JSON.stringify(a)})'>${a}</button>`).join("")}`);
}
function taskAnswer(i,a){
 const t=DB.tasks[i]; const ok=a===t[2];
 if(ok){state.xp+=10;state.tasks++;save();}
 shell(ok?"Неисправность найдена":"Не то",`<div class="card"><p>${ok?"+10 XP":`Правильное направление: <b>${t[2]}</b>`}</p></div><button class="btn primary wide" onclick="${ok?'tasksPage()':`task(${i})`}">Продолжить</button>`);
}

function examPage(){
 const picks=[...DB.tasks].sort(()=>Math.random()-.5).slice(0,10);
 window.exam={picks,idx:0,score:0};
 examQuestion();
}
function examQuestion(){
 const e=window.exam;
 if(e.idx>=e.picks.length){
   state.xp+=e.score*5; save();
   shell("Экзамен завершён",`<div class="exam-score">${e.score}/10</div><div class="card">Начислено ${e.score*5} XP</div><button class="btn primary wide" onclick="home()">В меню</button>`);
   return;
 }
 const t=e.picks[e.idx];
 shell(`Экзамен ${e.idx+1}/10`,`<div class="card">${t[1]}</div>${t[3].map(a=>`<button class="btn answer" onclick='examAnswer(${JSON.stringify(a)})'>${a}</button>`).join("")}`);
}
function examAnswer(a){
 const e=window.exam,t=e.picks[e.idx]; if(a===t[2])e.score++; e.idx++; examQuestion();
}

function handbookPage(){
 let html=`<input class="search" placeholder="Поиск..." oninput="filterHandbook(this.value)">`;
 for(const [k,arr] of Object.entries(handbook)){
   html+=`<div class="hb-group"><div class="section-title">${k}</div>${arr.map(x=>`<div class="card hb-item">${x}</div>`).join("")}</div>`;
 }
 shell("Справочник",html);
}
function filterHandbook(q){
 q=q.toLowerCase();
 document.querySelectorAll(".hb-group").forEach(g=>{
   g.style.display=g.innerText.toLowerCase().includes(q)?"":"none";
 });
}

function multimeterPage(){
 shell("Мультиметр",`
 <div class="big-number" id="meterDisplay">0.00</div>
 <div class="tabs">
 ${["V⎓","V~","Ω","mA⎓","A⎓","🔔"].map((m,i)=>`<button class="btn tab" onclick="meterMode('${m}')">${m}</button>`).join("")}
 </div>
 <div class="card" id="meterHelp">Выбери режим. Это учебный прибор.</div>
 <button class="btn wide" onclick="meterReading(24,'V')">Точка +24V → 0V</button>
 <button class="btn wide" onclick="meterReading(12,'mA')">Токовая петля 12 мА</button>
 <button class="btn wide" onclick="meterReading(250,'Ω')">Резистор 250 Ω</button>
 <div class="card small">Напряжение — параллельно. Ток — последовательно. Сопротивление/прозвонка — только на обесточенной цепи.</div>`);
}
let currentMeter="V⎓";
function meterMode(m){currentMeter=m;$("#meterHelp").innerText="Режим: "+m;$("#meterDisplay").innerText="0.00";}
function meterReading(v,u){
 let out="OL";
 if(currentMeter.includes("V")&&u==="V")out=v.toFixed(1)+" V";
 if(currentMeter.includes("mA")&&u==="mA")out=v.toFixed(1)+" mA";
 if(currentMeter==="Ω"&&u==="Ω")out=v.toFixed(1)+" Ω";
 if(currentMeter==="🔔"&&u==="Ω")out=v<5?"BEEP • "+v+" Ω":"OPEN";
 $("#meterDisplay").innerText=out;
}


let proc={level:50,pump:false,valve:false,temp:25,pressure:2.0,timer:null};
function processPage(){
 shell("Технологический объект",`
 <div class="process-scene">
  <div class="process-rig">
  <div class="pump-visual ${proc.pump?"running":""}"><div class="pump-rotor">✦</div><small>P-101</small></div>
  <div class="pipe ${proc.pump?"flowing":""}"></div>
  <div class="tank"><div id="liquid" class="liquid" style="height:${proc.level}%"><div class="wave"></div></div><span id="levelText">${proc.level.toFixed(0)}%</span></div>
  <div class="valve-visual ${proc.valve?"open":""}">◇<small>XV-101</small></div>
 </div>
  <div class="process-controls">
   <button class="btn" onclick="procPump()">Насос: <b id="pumpText">${proc.pump?"ВКЛ":"ВЫКЛ"}</b></button>
   <button class="btn" onclick="procValve()">Клапан: <b id="valveText">${proc.valve?"ОТКР":"ЗАКР"}</b></button>
  </div>
 </div>
 <div class="card" id="procInfo"></div>
 <button class="btn primary wide" onclick="procTick()">Обновить процесс</button>`);
 procTick(false);
}
function procPump(){proc.pump=!proc.pump;vibrate(20);processPage();}
function procValve(){proc.valve=!proc.valve;vibrate(20);processPage();}
function procTick(render=true){
 if(proc.pump)proc.level+=4;if(proc.valve)proc.level-=5;proc.level=Math.max(0,Math.min(100,proc.level));
 proc.pressure=0.5+proc.level/25;proc.temp=22+(proc.pump?3:0);
 const ma=4+16*(proc.level/100),ft=proc.valve?12:4;
 if($("#liquid"))$("#liquid").style.height=proc.level+"%";
 if($("#levelText"))$("#levelText").textContent=proc.level.toFixed(0)+"%";
 if($("#procInfo"))$("#procInfo").innerHTML=`<b>LT-101</b>: ${proc.level.toFixed(0)}% → ${ma.toFixed(2)} mA<br><b>PT-101</b>: ${proc.pressure.toFixed(1)} bar<br><b>TT-101</b>: ${proc.temp.toFixed(1)} °C<br><b>FT-101</b>: ${ft.toFixed(1)} mA`;
}
function vibrate(ms=15){if(navigator.vibrate)navigator.vibrate(ms);}

function calculatorsPage(){
 shell("Калькуляторы",`
 <div class="card"><h3>4–20 мА → %</h3><input id="ma" class="search" type="number" step="0.1" value="12"><button class="btn primary wide" onclick="calcMA()">Посчитать</button><div id="maOut"></div></div>
 <div class="card"><h3>4–20 мА → физическая величина</h3><input id="ma2" class="search" type="number" step="0.1" value="12"><input id="lo" class="search" type="number" value="0"><input id="hi" class="search" type="number" value="100"><button class="btn primary wide" onclick="calcScale()">Посчитать</button><div id="scaleOut"></div></div>
 <div class="card"><h3>Закон Ома</h3><input id="u" class="search" type="number" placeholder="U, В"><input id="r" class="search" type="number" placeholder="R, Ω"><button class="btn primary wide" onclick="calcOhm()">I = U/R</button><div id="ohmOut"></div></div>
 <div class="card"><h3>Мощность</h3><input id="pu" class="search" type="number" placeholder="U, В"><input id="pi" class="search" type="number" placeholder="I, А"><button class="btn primary wide" onclick="calcPower()">P = U×I</button><div id="pOut"></div></div>`);
}
function calcMA(){let m=+$("#ma").value;$("#maOut").innerHTML=`<h2>${(((m-4)/16)*100).toFixed(1)}%</h2>`}
function calcScale(){let m=+$("#ma2").value,l=+$("#lo").value,h=+$("#hi").value;let p=(m-4)/16;$("#scaleOut").innerHTML=`<h2>${(l+p*(h-l)).toFixed(2)}</h2>`}
function calcOhm(){let u=+$("#u").value,r=+$("#r").value;$("#ohmOut").innerHTML=`<h2>${(u/r).toFixed(3)} A</h2>`}
function calcPower(){let u=+$("#pu").value,i=+$("#pi").value;$("#pOut").innerHTML=`<h2>${(u*i).toFixed(2)} W</h2>`}


async function updatePage(){
 shell("Обновление",`
 <div class="card"><h3>Версия ${APP_VERSION}</h3>
 <p class="muted">Приложение проверяет обновления на GitHub Pages. Если опубликована новая версия — её можно применить без очистки Safari.</p></div>
 <button class="btn primary wide" onclick="forceAppUpdate()">Проверить и обновить</button>
 <button class="btn wide" onclick="hardReloadApp()">Перезапустить приложение</button>
 <div id="updateStatus" class="status">Готово к проверке.</div>`);
}
async function forceAppUpdate(){
 const s=$("#updateStatus"); if(s)s.textContent="Очищаю старый кэш и загружаю свежую версию...";
 try{
   if("serviceWorker" in navigator){
     const regs=await navigator.serviceWorker.getRegistrations();
     for(const r of regs) await r.unregister();
   }
   if("caches" in window){
     const keys=await caches.keys();
     await Promise.all(keys.map(k=>caches.delete(k)));
   }
 }catch(e){}
 const u=new URL(location.href);
 u.searchParams.set("update",Date.now().toString());
 location.replace(u.toString());
}
async function hardReloadApp(){
 try{
   if("serviceWorker" in navigator){
     const regs=await navigator.serviceWorker.getRegistrations();
     for(const r of regs) await r.unregister();
   }
   if("caches" in window){
     const keys=await caches.keys();
     await Promise.all(keys.map(k=>caches.delete(k)));
   }
 }catch(e){}
 const u=new URL(location.href);
 u.searchParams.set("reload",Date.now().toString());
 location.replace(u.toString());
}

function progressPage(){
 shell("Прогресс",`<div class="card"><h3>Уровень ${state.level}</h3><p>XP: ${state.xp}</p><p>Уроков: ${state.lessons}/${DB.lessons.length}</p><p>Решено заданий: ${state.tasks}</p></div><button class="btn bad wide" onclick="resetProgress()">Сбросить прогресс</button>`);
}
function resetProgress(){if(confirm("Сбросить весь прогресс?")){state={xp:0,lessons:0,tasks:0,level:1};save();progressPage()}}

let sb={
  nodes:[], wires:[], selected:null, pending:null, fault:null, nextId:1,
  power:false, wireColor:"#facc15", mode:"novice", probeA:null, probeB:null, view:{x:0,y:0,scale:1},
  history:[], future:[]
};

let sandboxAnimationFrame=null;
function startSandboxAnimations(){
 if(sandboxAnimationFrame)cancelAnimationFrame(sandboxAnimationFrame);
 const loop=()=>{
   if($("#canvas")&&sb.power)redraw();
   sandboxAnimationFrame=requestAnimationFrame(loop);
 };
 loop();
}

function sandboxPage(){
 shell("Песочница",`
 <div class="sandbox-head">
   <button id="powerBtn" class="btn power-off" onclick="togglePower()">⏻ Цепь ВЫКЛ</button>
   <button class="btn" onclick="toggleSimMode()" id="simModeBtn">Режим: Новичок</button>
   <button class="btn" onclick="saveScheme()">💾 Сохранить</button>
   <button class="btn" onclick="loadSavedScheme()">📂 Загрузить</button>
 </div>
 <div class="device-picker">
   <button class="btn primary wide picker-toggle" onclick="toggleDevicePicker()">＋ Добавить прибор</button>
   <div id="pickerPanel" class="picker-panel hidden">
     <input id="deviceSearch" class="search" placeholder="Поиск: реле, датчик, ПЛК..." oninput="renderDevicePicker(this.value)">
     <div id="deviceCategories" class="picker-categories"></div>
     <div id="deviceGrid" class="device-grid"></div>
   </div>
 </div>
 <div class="wire-toolbar">
   <span class="muted small">Цвет провода:</span>
   ${["#facc15","#ef4444","#38bdf8","#22c55e","#f8fafc","#a855f7"].map(c=>`<button class="wire-color" style="background:${c}" onclick="setWireColor('${c}')"></button>`).join("")}
   <button class="btn mini" onclick="undoSandbox()">↶</button>
   <button class="btn mini" onclick="redoSandbox()">↷</button>
 </div>
 <div class="sandbox-stage">
   <div class="sandbox-wrap" id="sandbox"><div id="world" class="sandbox-world"><canvas id="canvas"></canvas></div>
   <div class="view-controls"><button class="btn mini" onclick="zoomWorld(-.1)">−</button><button class="btn mini" onclick="resetWorldView()">100%</button><button class="btn mini" onclick="zoomWorld(.1)">＋</button></div></div>
   <aside id="deviceInfo" class="device-info collapsed">
   <div class="device-info-top">
     <div id="deviceInfoMini" class="device-info-mini">Выбери прибор</div>
     <button id="deviceInfoToggle" class="info-toggle" onclick="toggleDeviceInfo()">Показать</button>
   </div>
   <div id="deviceInfoDetails" class="device-info-details"></div>
 </aside>
 </div>
 <div class="sandbox-controls">
   <button class="btn" onclick="wireMode()">Соединить</button>
   <button class="btn" onclick="deleteSelected()">Удалить</button>
   <button class="btn" onclick="toggleSelectedDevice()">Переключить прибор</button>
   <button class="btn" onclick="openSelectedSettings()">Настроить</button>
   <button class="btn primary" onclick="simulate()">Проверить цепь</button>
   <button class="btn bad" onclick="injectFault()">Неисправность</button>
   <button class="btn" onclick="startProbe('A')">🔴 Щуп V+</button>
   <button class="btn" onclick="startProbe('B')">⚫ Щуп COM</button>
 </div>
 <div class="status" id="sbStatus">Цепь обесточена. Добавляй элементы и соединяй их по клеммам.</div>
 <div id="probeReadout" class="probe-readout">Мультиметр: щупы не установлены</div>`);
 fitCanvas(); redraw(); renderDevicePicker(""); updatePowerUI(); installWorldPanZoom(); applyWorldView(); startSandboxAnimations();
}

const deviceCategoryMap = {
 "Питание":["source24","ground","battery","groundPE"],
 "Управление":["switch","switchNC","estop","relay","contactor"],
 "Защита":["fuse","breaker","thermal"],
 "Нагрузки":["lamp","buzzer","motor","solenoid"],
 "Датчики":["sensor420","sensor010","pressure","temp","level","flow","limit","inductive"],
 "ПЛК":["plcIn","plcOut","ai","ao"],
 "Измерение":["meter","ammeter","resistor"],
 "Монтаж":["terminal"]
};
let activeDeviceCategory="Все";
function toggleDevicePicker(){ $("#pickerPanel")?.classList.toggle("hidden"); }
function renderDevicePicker(q=""){
 const grid=$("#deviceGrid"), cats=$("#deviceCategories"); if(!grid||!cats)return;
 cats.innerHTML=["Все",...Object.keys(deviceCategoryMap)].map(x=>`<button class="btn category ${x===activeDeviceCategory?"active":""}" onclick='setDeviceCategory(${JSON.stringify(x)})'>${x}</button>`).join("");
 q=(q||"").toLowerCase().trim();
 let allowed=activeDeviceCategory==="Все"?componentCatalog.map(x=>x[0]):(deviceCategoryMap[activeDeviceCategory]||[]);
 let list=componentCatalog.filter(c=>allowed.includes(c[0]) && (!q || c[1].toLowerCase().includes(q) || (componentInfo[c[0]]?.title||"").toLowerCase().includes(q)));
 grid.innerHTML=list.map(c=>{const i=componentInfo[c[0]]||{icon:"🔧",kind:""};return `<button class="device-choice" onclick="addCompFromPicker('${c[0]}')"><span>${i.icon}</span><b>${c[1]}</b><small>${i.kind}</small></button>`}).join("") || `<div class="muted">Ничего не найдено</div>`;
}
function setDeviceCategory(x){activeDeviceCategory=x;renderDevicePicker($("#deviceSearch")?.value||"");}
function addCompFromPicker(type){addComp(type); $("#pickerPanel")?.classList.add("hidden"); status("Добавлен: "+(componentInfo[type]?.title||cat(type)?.[1]||type));}


function snapshotSandbox(){
 const snap=JSON.stringify({nodes:sb.nodes,wires:sb.wires,power:sb.power,wireColor:sb.wireColor,mode:sb.mode,nextId:sb.nextId});
 if(sb.history[sb.history.length-1]!==snap){sb.history.push(snap); if(sb.history.length>40)sb.history.shift();}
 sb.future=[];
}
function restoreSandbox(snap){
 const d=JSON.parse(snap);
 sb.nodes=d.nodes||[]; sb.wires=d.wires||[]; sb.power=!!d.power; sb.wireColor=d.wireColor||"#facc15"; sb.mode=d.mode||"novice"; sb.nextId=d.nextId||1;
 sandboxPage();
 sb.nodes.forEach(n=>renderNode(n)); redraw(); updatePowerUI(); simulate(false);
}
function undoSandbox(){if(sb.history.length<2)return status("Нечего отменять."); const cur=sb.history.pop(); sb.future.push(cur); restoreSandbox(sb.history[sb.history.length-1]);}
function redoSandbox(){if(!sb.future.length)return status("Нечего повторять."); const n=sb.future.pop(); sb.history.push(n); restoreSandbox(n);}
function togglePower(){
 sb.power=!sb.power; updatePowerUI(); snapshotSandbox(); simulate(false); applyVisualState(); beep(sb.power?720:260,.06); vibrate(18);
 status(sb.power?"⚡ Питание цепи включено.":"⏻ Цепь обесточена.");
}
function updatePowerUI(){
 const b=$("#powerBtn"); if(!b)return;
 b.textContent=sb.power?"⚡ Цепь ВКЛ":"⏻ Цепь ВЫКЛ";
 b.classList.toggle("power-on",sb.power); b.classList.toggle("power-off",!sb.power);
}
function toggleSimMode(){
 sb.mode=sb.mode==="novice"?"realism":"novice";
 const b=$("#simModeBtn"); if(b)b.textContent="Режим: "+(sb.mode==="novice"?"Новичок":"Реализм");
 status(sb.mode==="novice"?"Подсказки включены.":"Реализм: минимум подсказок.");
}
function setWireColor(c){sb.wireColor=c; status("Цвет нового провода выбран.");}
function saveScheme(){
 const name=prompt("Название схемы:", "Моя схема "+new Date().toLocaleString());
 if(!name)return;
 const saves=JSON.parse(localStorage.getItem("kipSandboxSaves")||"[]");
 saves.unshift({name,date:Date.now(),data:{nodes:sb.nodes,wires:sb.wires,nextId:sb.nextId,mode:sb.mode}});
 localStorage.setItem("kipSandboxSaves",JSON.stringify(saves.slice(0,20)));
 status("Схема сохранена: "+name);
}
function loadSavedScheme(){
 const saves=JSON.parse(localStorage.getItem("kipSandboxSaves")||"[]");
 if(!saves.length)return status("Сохранённых схем пока нет.");
 shell("Мои схемы",saves.map((s,i)=>`<div class="card"><h3>${s.name}</h3><div class="muted small">${new Date(s.date).toLocaleString()}</div><button class="btn primary wide" onclick="openSavedScheme(${i})">Открыть</button><button class="btn bad wide" onclick="deleteSavedScheme(${i})">Удалить</button></div>`).join(""));
}


function defaultComponentSettings(type){
 const map={
  source24:{voltage:24,lo:0,hi:24,value:24,signal:null},
  battery:{voltage:12,lo:0,hi:12,value:12,signal:null},
  resistor:{resistance:250,lo:1,hi:10000,value:250,signal:null},
  lamp:{ratedVoltage:24,value:24,signal:null},
  buzzer:{ratedVoltage:24,value:24,signal:null},
  motor:{ratedVoltage:24,powerW:120,speedRpm:1450,value:1450,signal:null},
  relay:{coilVoltage:24,value:24,signal:null},
  contactor:{coilVoltage:24,value:24,signal:null},
  fuse:{ratedCurrent:2,value:2,signal:null},
  breaker:{ratedCurrent:6,value:6,signal:null},
  thermal:{ratedCurrent:3,value:3,signal:null},
  sensor420:{lo:0,hi:100,value:50,unit:"%",signal:12},
  pressure:{lo:0,hi:10,value:5,unit:"bar",signal:12},
  temp:{lo:0,hi:200,value:100,unit:"°C",signal:12},
  level:{lo:0,hi:5,value:2.5,unit:"m",signal:12},
  flow:{lo:0,hi:100,value:50,unit:"m³/h",signal:12},
  sensor010:{lo:0,hi:100,value:50,unit:"%",voltageOut:5,signal:null},
  solenoid:{coilVoltage:24,position:0,value:0,signal:null},
  ai:{range:"4-20mA",value:12,signal:null},
  ao:{range:"4-20mA",value:12,signal:null},
  meter:{range:"0-60V",value:0,signal:null},
  ammeter:{range:"0-10A",value:0,signal:null}
 };
 return structuredClone ? structuredClone(map[type]||{lo:0,hi:100,value:50,signal:null}) : JSON.parse(JSON.stringify(map[type]||{lo:0,hi:100,value:50,signal:null}));
}
function recalcComponentSignal(n){
 if(["sensor420","pressure","temp","level","flow"].includes(n.type)){
   const span=(n.hi-n.lo)||1;
   n.signal=4+16*Math.max(0,Math.min(1,(n.value-n.lo)/span));
 }
 if(n.type==="sensor010"){
   const span=(n.hi-n.lo)||1;
   n.voltageOut=10*Math.max(0,Math.min(1,(n.value-n.lo)/span));
 }
}

function terminalList(type){
 const map={
  source24:["+", "0V"], ground:["0V"], battery:["+","−"], switch:["1","2"], switchNC:["1","2"], estop:["11","12"],
  lamp:["L","0V"], buzzer:["+","−"], motor:["U","V","W"], relay:["A1","A2","13","14","21","22"],
  contactor:["A1","A2","L1","T1","13","14"], fuse:["IN","OUT"], breaker:["IN","OUT"], thermal:["IN","OUT","95","96"],
  resistor:["1","2"], sensor420:["+","−"], sensor010:["+V","OUT","0V"], pressure:["+","−"], temp:["+","−"],
  level:["+","−"], flow:["+","−"], limit:["COM","NO","NC"], inductive:["+V","OUT","0V"], solenoid:["A1","A2"],
  plcIn:["IN","COM"], plcOut:["OUT","COM"], ai:["AI+","AI−"], ao:["AO+","AO−"], terminal:["1","2"],
  meter:["V","COM"], ammeter:["A","COM"], groundPE:["PE"]
 };
 return map[type]||["IN","OUT"];
}
function openSelectedSettings(){
 const n=sb.nodes.find(x=>x.id===sb.selected); if(!n)return status("Сначала выбери прибор.");
 const ask=(label,current)=>{const v=prompt(label,String(current));return v===null?null:+v};

 if(["sensor420","pressure","temp","level","flow","sensor010"].includes(n.type)){
   const lo=ask("Нижний предел шкалы:",n.lo??0);if(lo===null)return;
   const hi=ask("Верхний предел шкалы:",n.hi??100);if(hi===null)return;
   const val=ask("Текущее значение процесса:",n.value??((lo+hi)/2));if(val===null)return;
   n.lo=lo;n.hi=hi;n.value=Math.max(Math.min(val,Math.max(lo,hi)),Math.min(lo,hi));
   recalcComponentSignal(n);
   showDeviceInfo(n.type,n);snapshotSandbox();animateValueChange(n);
   status(n.type==="sensor010"?`Сигнал: ${n.voltageOut.toFixed(2)} В`:`Сигнал: ${n.signal.toFixed(2)} мА`);
   return;
 }

 if(n.type==="resistor"){
   const v=ask("Сопротивление, Ω:",n.resistance??250);if(v===null)return;
   n.resistance=Math.max(.1,v);n.value=n.resistance;snapshotSandbox();showDeviceInfo(n.type,n);animateValueChange(n);status(`R = ${n.resistance} Ω`);return;
 }
 if(["source24","battery"].includes(n.type)){
   const v=ask("Напряжение источника, В:",n.voltage??24);if(v===null)return;
   n.voltage=Math.max(0,v);n.value=n.voltage;snapshotSandbox();showDeviceInfo(n.type,n);animateValueChange(n);status(`Источник: ${n.voltage.toFixed(1)} В`);return;
 }
 if(["relay","contactor","solenoid"].includes(n.type)){
   const v=ask("Номинал катушки, В:",n.coilVoltage??24);if(v===null)return;
   n.coilVoltage=Math.max(1,v);n.value=n.coilVoltage;snapshotSandbox();showDeviceInfo(n.type,n);animateValueChange(n);status(`Катушка: ${n.coilVoltage.toFixed(1)} В`);return;
 }
 if(["fuse","breaker","thermal"].includes(n.type)){
   const v=ask("Номинальный ток, А:",n.ratedCurrent??2);if(v===null)return;
   n.ratedCurrent=Math.max(.01,v);n.value=n.ratedCurrent;snapshotSandbox();showDeviceInfo(n.type,n);animateValueChange(n);status(`Номинал: ${n.ratedCurrent.toFixed(2)} А`);return;
 }
 if(n.type==="motor"){
   const p=ask("Мощность двигателя, Вт:",n.powerW??120);if(p===null)return;
   const rpm=ask("Скорость, об/мин:",n.speedRpm??1450);if(rpm===null)return;
   n.powerW=Math.max(1,p);n.speedRpm=Math.max(0,rpm);n.value=n.speedRpm;snapshotSandbox();showDeviceInfo(n.type,n);animateValueChange(n);status(`${n.powerW} Вт • ${n.speedRpm} об/мин`);return;
 }
 if(["ai","ao"].includes(n.type)){
   const raw=prompt("Диапазон канала: 4-20mA или 0-10V",n.range||"4-20mA");if(raw===null)return;
   n.range=raw;snapshotSandbox();showDeviceInfo(n.type,n);animateValueChange(n);status(`Диапазон: ${n.range}`);return;
 }
 status("Для этого элемента пока нет изменяемых параметров.");
}

function beep(freq=500,dur=.05){
 try{const A=window.AudioContext||window.webkitAudioContext;const c=new A(),o=c.createOscillator(),g=c.createGain();o.frequency.value=freq;o.connect(g);g.connect(c.destination);g.gain.value=.035;o.start();o.stop(c.currentTime+dur);}catch(e){}
}

function toggleSelectedDevice(){
 const n=sb.nodes.find(x=>x.id===sb.selected); if(!n)return status("Выбери кнопку, автомат, реле или контактор.");
 const toggles=["switch","switchNC","estop","breaker","relay","contactor"];
 if(!toggles.includes(n.type))return status("Этот элемент не переключается вручную.");
 n.on=!n.on; beep(n.on?650:350,.04); vibrate(12); const el=document.querySelector(`[data-id="${n.id}"]`); if(el)el.classList.toggle("active-device",n.on);
 snapshotSandbox(); simulate(false);
 status(`${componentInfo[n.type]?.title||n.type}: ${n.on?"ВКЛ":"ВЫКЛ"}`);
}
let probeTarget=null;
function startProbe(which){probeTarget=which;status(`Выбери прибор для щупа ${which==="A"?"V+":"COM"}.`);}
function assignProbe(nodeId){
 if(!probeTarget)return;
 if(probeTarget==="A")sb.probeA=nodeId; else sb.probeB=nodeId;
 probeTarget=null; updateProbeReadout();
}
function updateProbeReadout(){
 const out=$("#probeReadout"); if(!out)return;
 if(!sb.probeA||!sb.probeB){out.textContent=`Мультиметр: ${sb.probeA?"V+ установлен":"V+ —"} / ${sb.probeB?"COM установлен":"COM —"}`;return;}
 if(!sb.power){out.textContent="Мультиметр: 0.0 V (цепь выключена)";return;}
 const A=sb.nodes.find(n=>n.id===sb.probeA),B=sb.nodes.find(n=>n.id===sb.probeB);
 if(!A||!B){out.textContent="Мультиметр: щупы не установлены";return;}
 const ta=A.type,tb=B.type;
 let v=0;
 if(ta==="source24"&&["ground","groundPE"].includes(tb))v=24;
 else if(tb==="source24"&&["ground","groundPE"].includes(ta))v=-24;
 else if(["lamp","relay","contactor","solenoid","plcIn","ai"].includes(ta)&&["ground"].includes(tb))v=hasPoweredPathTo(A.id)?24:0;
 else v=linkedById(A.id,B.id)?0:24;
 out.textContent=`Мультиметр: ${v.toFixed(1)} V`;
}
function linkedById(a,b){return sb.wires.some(w=>(w.a===a&&w.b===b)||(w.a===b&&w.b===a)||(Array.isArray(w)&&((w[0]===a&&w[1]===b)||(w[0]===b&&w[1]===a))));}
function hasPoweredPathTo(id){
 const src=sb.nodes.find(n=>n.type==="source24"); if(!src)return false;
 const seen=new Set([src.id]); const q=[src.id];
 while(q.length){const cur=q.shift(); if(cur===id)return true;
  for(const w of sb.wires){const a=w.a??w[0],b=w.b??w[1]; let nxt=null;if(a===cur)nxt=b;if(b===cur)nxt=a;if(nxt!=null&&!seen.has(nxt)){seen.add(nxt);q.push(nxt)}}
 }
 return false;
}


function applyWorldView(){
 const w=$("#world");if(!w)return;
 const v=sb.view||{x:0,y:0,scale:1};
 w.style.transform=`translate(${v.x}px,${v.y}px) scale(${v.scale})`;
 w.style.transformOrigin="0 0";
}
function zoomWorld(delta){
 sb.view=sb.view||{x:0,y:0,scale:1};
 sb.view.scale=Math.max(.45,Math.min(2.5,sb.view.scale+delta));
 applyWorldView();
}
function resetWorldView(){sb.view={x:0,y:0,scale:1};applyWorldView();}
function installWorldPanZoom(){
 const area=$("#sandbox"),world=$("#world");if(!area||!world)return;
 let pointers=new Map(),start=null,lastCenter=null,startScale=sb.view?.scale||1;
 area.addEventListener("pointerdown",e=>{
   if(e.target.closest(".component")||e.target.closest("button"))return;
   pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
   try{area.setPointerCapture(e.pointerId)}catch(_){}
   if(pointers.size===1)start={x:e.clientX,y:e.clientY,vx:sb.view.x,vy:sb.view.y};
   if(pointers.size===2){const p=[...pointers.values()];lastCenter={x:(p[0].x+p[1].x)/2,y:(p[0].y+p[1].y)/2,d:Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y)};startScale=sb.view.scale;}
 });
 area.addEventListener("pointermove",e=>{
   if(!pointers.has(e.pointerId))return;
   pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
   if(pointers.size===1&&start){
     sb.view.x=start.vx+e.clientX-start.x;sb.view.y=start.vy+e.clientY-start.y;applyWorldView();
   } else if(pointers.size===2&&lastCenter){
     const p=[...pointers.values()],d=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);
     sb.view.scale=Math.max(.45,Math.min(2.5,startScale*(d/lastCenter.d)));applyWorldView();
   }
 });
 const end=e=>{pointers.delete(e.pointerId);if(!pointers.size)start=null};
 area.addEventListener("pointerup",end);area.addEventListener("pointercancel",end);
 applyWorldView();
}

function fitCanvas(){const c=$("#canvas"),s=$("#sandbox"); if(!c||!s)return; c.width=s.clientWidth*devicePixelRatio;c.height=s.clientHeight*devicePixelRatio;c.style.width=s.clientWidth+"px";c.style.height=s.clientHeight+"px";}
function cat(id){return componentCatalog.find(x=>x[0]===id)}
function addComp(type,x=null,y=null){
 const s=$("#sandbox"); if(!s)return;
 const defaults=defaultComponentSettings(type);
 const n={id:sb.nextId++,type,x:x??(20+Math.random()*(s.clientWidth-160)),y:y??(50+Math.random()*(s.clientHeight-120)),scale:1,on:false,terminals:terminalList(type),...defaults}; snapshotSandbox();
 sb.nodes.push(n); renderNode(n); redraw();
}
function renderNode(n){
 const s=$("#world")||$("#sandbox"), c=cat(n.type);
 const el=document.createElement("div"); el.className=`component ${c[2]}`;el.dataset.id=n.id;el.style.left=n.x+"px";el.style.top=n.y+"px";
 const info=componentInfo[n.type]||{icon:"🔧"};
 const terms=(n.terminals||terminalList(n.type)).map((t,i)=>`<span class="terminal-dot" data-term="${t}" title="${t}" onclick="terminalClicked(${n.id},${JSON.stringify(t)},event)">${t}</span>`).join("");
 el.innerHTML=`<div class="devicon">${info.icon}</div><div class="name">${c[1]}</div><div class="terminal-row">${terms}</div>`;
 applyNodeScale(n,el);
 installNodeGestures(n,el);
 el.addEventListener("pointerdown",e=>startDrag(e,n,el));
 el.addEventListener("click",e=>{e.stopPropagation();selectNode(n.id)});
 s.appendChild(el);
}
function pinText(t){
 const map={source24:"+ / −",ground:"0V",switch:"1 • 2",switchNC:"1 • 2",estop:"11 • 12",lamp:"L • N",relay:"A1 • A2 • 13/14",contactor:"A1 • A2 • силовые",fuse:"IN • OUT",breaker:"IN • OUT",sensor420:"+ • −",sensor010:"+ • OUT • 0V",ai:"AI+ • AI−",plcIn:"IN • COM",plcOut:"OUT • COM",motor:"U • V • W",resistor:"1 • 2",solenoid:"A1 • A2"};
 return map[t]||"IN • OUT";
}

function applyNodeScale(n,el){
 if(!el)el=document.querySelector(`[data-id="${n.id}"]`);
 if(!el)return;
 el.style.transform=`scale(${n.scale||1})`;
 el.style.transformOrigin="center center";
}
function installNodeGestures(n,el){
 const touches=new Map();
 let startDistance=0,startScale=n.scale||1;
 el.addEventListener("pointerdown",e=>{
   touches.set(e.pointerId,{x:e.clientX,y:e.clientY});
   try{el.setPointerCapture(e.pointerId)}catch(_){}
   if(touches.size===2){
     const p=[...touches.values()];
     startDistance=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);
     startScale=n.scale||1;
   }
 });
 el.addEventListener("pointermove",e=>{
   if(!touches.has(e.pointerId))return;
   touches.set(e.pointerId,{x:e.clientX,y:e.clientY});
   if(touches.size===2){
     const p=[...touches.values()];
     const d=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);
     if(startDistance>0){
       n.scale=Math.max(.55,Math.min(2.2,startScale*d/startDistance));
       applyNodeScale(n,el); redraw(); showDeviceInfo(n.type,n);
     }
   }
 });
 const end=e=>touches.delete(e.pointerId);
 el.addEventListener("pointerup",end); el.addEventListener("pointercancel",end);
}

function selectNode(id){
 sb.selected=id;
 document.querySelectorAll(".component").forEach(e=>e.classList.toggle("selected",+e.dataset.id===id));
 const n=sb.nodes.find(x=>x.id===id);
 if(n){ showDeviceInfo(n.type,n); if(probeTarget)assignProbe(id); }
}
function showDeviceInfo(type,node=null){
 const box=$("#deviceInfo"), mini=$("#deviceInfoMini"), details=$("#deviceInfoDetails");
 if(!box||!mini||!details)return;
 const i=componentInfo[type]||{icon:"🔧",title:cat(type)?.[1]||type,kind:"Элемент",spec:"—",io:"—",desc:"Учебный элемент.",tip:"Используй в песочнице."};
 mini.innerHTML=`<span class="mini-icon">${i.icon}</span><span><b>${i.title}</b>${node?`<small>${Math.round((node.scale||1)*100)}%</small>`:""}</span>`;
 details.innerHTML=`
   <div class="device-info-row"><span>Тип</span><b>${i.kind}</b></div>
   <div class="device-info-row"><span>Характеристика</span><b>${i.spec}</b></div>
   <div class="device-info-row"><span>Выводы</span><b>${i.io}</b></div>
   ${node&&node.signal!=null?`<div class="device-info-row"><span>Сигнал</span><b>${node.signal.toFixed(2)} mA</b></div>`:""}
 ${node&&node.voltageOut!=null?`<div class="device-info-row"><span>Выход</span><b>${node.voltageOut.toFixed(2)} V</b></div>`:""}
 ${node&&node.voltage!=null?`<div class="device-info-row"><span>Напряжение</span><b>${node.voltage.toFixed(1)} V</b></div>`:""}
 ${node&&node.resistance!=null?`<div class="device-info-row"><span>Сопротивление</span><b>${node.resistance} Ω</b></div>`:""}
 ${node&&node.ratedCurrent!=null?`<div class="device-info-row"><span>Номинал</span><b>${node.ratedCurrent} A</b></div>`:""}
 ${node&&node.speedRpm!=null?`<div class="device-info-row"><span>Скорость</span><b>${node.speedRpm} rpm</b></div>`:""}
   ${node?`<div class="device-info-row"><span>Состояние</span><b>${node.on?"ВКЛ":"ВЫКЛ"}</b></div>`:""}
   <div class="device-info-text">${i.desc}</div>
   <div class="device-info-tip">💡 ${i.tip}</div>`;
}
function toggleDeviceInfo(){
 const box=$("#deviceInfo"), btn=$("#deviceInfoToggle"); if(!box||!btn)return;
 const collapsed=box.classList.toggle("collapsed");
 btn.textContent=collapsed?"Показать":"Скрыть";
}
function startDrag(e,n,el){
 el.setPointerCapture(e.pointerId);
 const sx=e.clientX,sy=e.clientY,ox=n.x,oy=n.y;
 const move=ev=>{n.x=ox+ev.clientX-sx;n.y=oy+ev.clientY-sy;el.style.left=n.x+"px";el.style.top=n.y+"px";redraw()};
 const up=()=>{el.removeEventListener("pointermove",move);el.removeEventListener("pointerup",up)};
 el.addEventListener("pointermove",move); el.addEventListener("pointerup",up);
}

let pendingTerminal=null;
function terminalClicked(nodeId,term,ev){
 ev.stopPropagation();
 if(!sb.pending){
   sb.pending=nodeId;pendingTerminal=term;selectNode(nodeId);status(`Первая клемма: ${term}. Выбери вторую клемму.`);
 }else{
   if(sb.pending===nodeId&&pendingTerminal===term)return;
   sb.wires.push({a:sb.pending,b:nodeId,ta:pendingTerminal,tb:term,color:sb.wireColor});
   sb.pending=null;pendingTerminal=null;snapshotSandbox();redraw();status("Провод подключён к клеммам.");
 }
}

function wireMode(){
 if(!sb.selected)return status("Выбери элемент.");
 if(sb.pending==null){sb.pending=sb.selected;status("Первый элемент запомнен. Выбери второй и снова нажми «Соединить».");return;}
 if(sb.pending===sb.selected){status("Выбери другой элемент.");return;}
 sb.wires.push({a:sb.pending,b:sb.selected,color:sb.wireColor,ta:null,tb:null});sb.pending=null;snapshotSandbox();status("Провод добавлен.");redraw();
}
function redraw(){
 const c=$("#canvas"); if(!c)return; const ctx=c.getContext("2d"); const d=devicePixelRatio;
 ctx.clearRect(0,0,c.width,c.height);ctx.lineWidth=5*d;ctx.lineCap="round";
 const t=(performance.now()/60)%100;
 sb.wires.forEach(w=>{
   const a=w.a??w[0],b=w.b??w[1];let A=sb.nodes.find(n=>n.id===a),B=sb.nodes.find(n=>n.id===b);if(!A||!B)return;
   ctx.strokeStyle=w.color||"#facc15";
   if(sb.power){ctx.setLineDash([12*d,8*d]);ctx.lineDashOffset=-t*d;} else {ctx.setLineDash([]);}
   ctx.shadowBlur=sb.power?9*d:0;ctx.shadowColor=w.color||"#facc15";
   ctx.beginPath();ctx.moveTo((A.x+60)*d,(A.y+32)*d);ctx.lineTo((B.x+60)*d,(B.y+32)*d);ctx.stroke();
 });
 ctx.setLineDash([]);ctx.shadowBlur=0;updateProbeReadout();
}
function deleteSelected(){
 if(!sb.selected)return; const id=sb.selected; sb.nodes=sb.nodes.filter(n=>n.id!==id);sb.wires=sb.wires.filter(w=>!((w.a??w[0])===id||(w.b??w[1])===id));snapshotSandbox();document.querySelector(`[data-id="${id}"]`)?.remove();sb.selected=null;redraw();
}
function status(t){const x=$("#sbStatus");if(x)x.innerText=t}
function linked(typeA,typeB){
 const As=sb.nodes.filter(n=>n.type===typeA).map(n=>n.id), Bs=sb.nodes.filter(n=>n.type===typeB).map(n=>n.id);
 return sb.wires.some(w=>{const a=w.a??w[0],b=w.b??w[1];return (As.includes(a)&&Bs.includes(b))||(As.includes(b)&&Bs.includes(a))});
}

function getEdges(){
 return sb.wires.map(w=>({a:w.a??w[0],b:w.b??w[1],ta:w.ta||null,tb:w.tb||null}));
}
function nodeConducts(n){
 if(["switch","breaker","relay","contactor"].includes(n.type))return !!n.on;
 if(["switchNC","estop"].includes(n.type))return !n.on;
 if(sb.fault==="bad_switch"&&n.type==="switch")return false;
 return true;
}
function poweredNodes(){
 const src=sb.nodes.filter(n=>["source24","battery"].includes(n.type));
 const edges=getEdges(),seen=new Set(src.map(n=>n.id)),q=[...seen];
 while(q.length){
   const cur=q.shift();
   for(const e of edges){
     let nxt=null;if(e.a===cur)nxt=e.b;else if(e.b===cur)nxt=e.a;
     if(nxt==null||seen.has(nxt))continue;
     const n=sb.nodes.find(x=>x.id===nxt);if(!n||!nodeConducts(n))continue;
     seen.add(nxt);q.push(nxt);
   }
 }
 return seen;
}
function hasGroundPath(id){
 const grounds=new Set(sb.nodes.filter(n=>n.type==="ground").map(n=>n.id));
 const edges=getEdges(),seen=new Set([id]),q=[id];
 while(q.length){const cur=q.shift();if(grounds.has(cur))return true;
  for(const e of edges){let nxt=null;if(e.a===cur)nxt=e.b;else if(e.b===cur)nxt=e.a;
   if(nxt!=null&&!seen.has(nxt)){const n=sb.nodes.find(x=>x.id===nxt);if(n&&nodeConducts(n)){seen.add(nxt);q.push(nxt)}}
  }
 }
 return false;
}

function animateValueChange(n){
 const el=document.querySelector(`[data-id="${n.id}"]`);
 if(!el)return;
 el.classList.remove("value-pulse");
 void el.offsetWidth;
 el.classList.add("value-pulse");
 setTimeout(()=>el.classList.remove("value-pulse"),500);
}
function applyVisualState(){
 const powered=runElectricalEngine();
 for(const n of sb.nodes){
   const el=document.querySelector(`[data-id="${n.id}"]`);
   if(!el)continue;
   const live=sb.power&&powered.has(n.id)&&hasGroundPath(n.id);
   el.classList.toggle("energized",live);
   el.classList.toggle("motor-running",n.type==="motor"&&live);
   el.classList.toggle("relay-active",["relay","contactor"].includes(n.type)&&n.on);
   el.classList.toggle("valve-open",n.type==="solenoid"&&live);
   el.classList.toggle("plc-live",["plcIn","plcOut","ai","ao"].includes(n.type)&&live);
 }
 updateAnimatedWires(powered);
}
function updateAnimatedWires(powered){
 const c=$("#canvas");if(!c)return;
 c.classList.toggle("current-flow",sb.power);
}
function flashEvent(kind="ok"){
 const s=$("#sbStatus");if(!s)return;
 s.classList.remove("flash-ok","flash-bad");
 void s.offsetWidth;
 s.classList.add(kind==="bad"?"flash-bad":"flash-ok");
 setTimeout(()=>s.classList.remove("flash-ok","flash-bad"),500);
}

function runElectricalEngine(){
 const p=poweredNodes();
 for(const n of sb.nodes){
   const energized=sb.power&&p.has(n.id)&&hasGroundPath(n.id);
   if(["relay","contactor"].includes(n.type))n.on=energized;
 }
 return p;
}

function simulate(reward=true){
 document.querySelectorAll(".component.lamp").forEach(e=>e.classList.remove("on")); const powered=runElectricalEngine();
 if(!sb.power){applyVisualState();status("⏻ Цепь выключена. Включи питание кнопкой сверху.");updateProbeReadout();return;}
 if(sb.fault==="open"){status(sb.mode==="novice"?"⚠ Обрыв цепи: ищи точку, после которой пропадает напряжение.":"⚠ Неисправность обнаружена.");return}
 if(sb.fault==="short"){status(sb.mode==="novice"?"⚠ Короткое замыкание: защита отключила цепь.":"⚠ Защита сработала.");sb.power=false;updatePowerUI();return}
 if(sb.fault==="bad_switch"){status(sb.mode==="novice"?"⚠ Неисправность кнопки: на входе 24 В, на выходе 0 В.":"⚠ Неисправность в цепи управления.");return}
 const sw=sb.nodes.find(n=>n.type==="switch");
 const br=sb.nodes.find(n=>n.type==="breaker");
 const allowedSwitch=!sw||sw.on;
 const allowedBreaker=!br||br.on;
 for(const n of sb.nodes.filter(x=>x.type==="lamp")){
   const el=document.querySelector(`[data-id="${n.id}"]`);
   const on=sb.power&&powered.has(n.id)&&hasGroundPath(n.id); if(el)el.classList.toggle("on",on);
 }
 if(linked("source24","switch")&&linked("switch","lamp")&&linked("lamp","ground")&&allowedSwitch&&allowedBreaker){
   document.querySelectorAll(".component.lamp").forEach(e=>e.classList.add("on"));
   applyVisualState(); flashEvent("ok"); status("✓ Цепь под напряжением. Лампа горит."); if(reward){state.xp+=5;save();} updateProbeReadout();return;
 }
 if(linked("source24","sensor420")&&linked("sensor420","ai")&&linked("ai","ground")){
   const s=sb.nodes.find(n=>n.type==="sensor420"); applyVisualState(); flashEvent("ok"); status(`✓ Токовая петля работает: ${(s?.signal??12).toFixed(2)} мА.`);if(reward){state.xp+=5;save();}updateProbeReadout();return;
 }
 applyVisualState(); flashEvent("bad"); status(sb.mode==="novice"?"Цепь не работает. Проверь питание, состояние кнопок/автоматов и соединения.":"Цепь не работает."); updateProbeReadout();
}
function injectFault(){
 sb.fault=["open","short","bad_switch"][Math.floor(Math.random()*3)];
 document.querySelectorAll(".component").forEach(e=>e.classList.remove("fault"));
 if(sb.nodes.length){let n=sb.nodes[Math.floor(Math.random()*sb.nodes.length)];document.querySelector(`[data-id="${n.id}"]`)?.classList.add("fault")}
 snapshotSandbox();status("Скрытая неисправность добавлена. Нажми «Проверить» и диагностируй.");
}
function schemesPage(){
 shell("Готовые схемы",`
 <div class="card"><b>${schemes.length} учебных шаблонов</b><div class="muted small">Выбери схему — она сразу загрузится в песочницу с приборами и проводами.</div></div>
 <input class="search" placeholder="Поиск схемы..." oninput="filterSchemes(this.value)">
 <div id="schemeContainer" class="scheme-list">
 ${schemes.map((s,i)=>`<div class="card scheme-card" data-search="${(s[0]+' '+(s[3]||'')+' '+s[1].map(x=>cat(x)?.[1]||x).join(' ')).toLowerCase()}">
   <h3>${s[0]}</h3>
   <div class="muted small">${s[3]||""}</div>
   <div class="scheme-tags">${s[1].map(x=>`<span class="tag">${componentInfo[x]?.icon||"🔧"} ${cat(x)?.[1]||x}</span>`).join("")}</div>
   <button class="btn primary wide" onclick="loadScheme(${i})">Открыть в песочнице</button>
 </div>`).join("")}
 </div>`);
}
function filterSchemes(q){
 q=(q||"").toLowerCase().trim();
 document.querySelectorAll(".scheme-card").forEach(el=>el.style.display=!q||el.dataset.search.includes(q)?"":"none");
}
function loadScheme(i){
 const data=schemes[i];
 if(!data)return;
 sb={
   nodes:[],wires:[],selected:null,pending:null,fault:null,nextId:1,
   power:false,wireColor:"#facc15",mode:"novice",probeA:null,probeB:null,view:{x:0,y:0,scale:1},
   history:[],future:[]
 };
 sandboxPage();
 const s=$("#sandbox");
 if(!s){alert("Не удалось открыть песочницу.");return;}
 const idsByType={};
 data[1].forEach((type,idx)=>{
   const cols=s.clientWidth<520?2:3;
   const cellW=Math.max(145,s.clientWidth/cols);
   const x=18+(idx%cols)*cellW;
   const y=60+Math.floor(idx/cols)*125;
   const n={
     id:sb.nextId++,type,x,y,scale:.9,on:false,
     terminals:terminalList(type),...defaultComponentSettings(type)
   };
   sb.nodes.push(n);
   if(!idsByType[type])idsByType[type]=[];
   idsByType[type].push(n.id);
   renderNode(n);
 });
 const useCount={};
 const getId=(type)=>{
   const arr=idsByType[type]||[];
   const idx=useCount[type]||0;
   useCount[type]=idx+1;
   return arr[Math.min(idx,arr.length-1)];
 };
 data[2].forEach(([ta,tb],wireIndex)=>{
   const a=getId(ta),b=getId(tb);
   if(a!=null&&b!=null){
     const colors=["#facc15","#ef4444","#38bdf8","#22c55e","#f8fafc","#a855f7"];
     sb.wires.push({a,b,color:colors[wireIndex%colors.length]});
   }
 });
 redraw();
 snapshotSandbox();
 updatePowerUI();
 status(`Шаблон загружен: ${data[0]}. Приборов: ${sb.nodes.length}, проводов: ${sb.wires.length}. Включи питание.`);
}

window.addEventListener("resize",()=>{fitCanvas();redraw()});


async function disableOldPwaCache(){
  const key="kip-sw-cleaned-410";
  if(localStorage.getItem(key)==="1") return;
  try{
    if("serviceWorker" in navigator){
      const regs=await navigator.serviceWorker.getRegistrations();
      for(const r of regs) await r.unregister();
    }
    if("caches" in window){
      const keys=await caches.keys();
      await Promise.all(keys.map(k=>caches.delete(k)));
    }
    localStorage.setItem(key,"1");
    const u=new URL(location.href);
    if(u.searchParams.get("build")!=="410"){
      u.searchParams.set("build","410");
      location.replace(u.toString());
      return;
    }
  }catch(e){
    console.warn("PWA cache cleanup:",e);
  }
}
disableOldPwaCache();

home();

function openSavedScheme(i){
 const saves=JSON.parse(localStorage.getItem("kipSandboxSaves")||"[]");
 const s=saves[i]; if(!s)return;
 const d=s.data; sb.nodes=d.nodes||[];sb.wires=d.wires||[];sb.nextId=d.nextId||1;sb.mode=d.mode||"novice";sb.power=false;
 sandboxPage();sb.nodes.forEach(n=>renderNode(n));redraw();snapshotSandbox();status("Загружено: "+s.name);
}
function deleteSavedScheme(i){
 const saves=JSON.parse(localStorage.getItem("kipSandboxSaves")||"[]");saves.splice(i,1);
 localStorage.setItem("kipSandboxSaves",JSON.stringify(saves));loadSavedScheme();
}
