import Icon from "@/components/ui/icon"
import type { Section } from "@/types"

const virusTypes = [
  {
    icon: "Skull",
    name: "Трояны",
    desc: "Маскируются под полезное ПО и открывают доступ злоумышленникам",
    color: "text-red-400",
  },
  {
    icon: "Network",
    name: "Черви",
    desc: "Самостоятельно распространяются по сети без участия пользователя",
    color: "text-orange-400",
  },
  {
    icon: "Lock",
    name: "Шифровальщики",
    desc: "Блокируют файлы и требуют выкуп — самый опасный вид на сегодня",
    color: "text-yellow-400",
  },
  {
    icon: "Eye",
    name: "Шпионы",
    desc: "Крадут пароли, данные карт и личную переписку",
    color: "text-purple-400",
  },
]

const infectionPaths = [
  { icon: "Mail", text: "Письма с вложениями (фишинг)" },
  { icon: "Usb", text: "Непроверенные флешки и носители" },
  { icon: "Download", text: "Пиратский софт и «взломщики» игр" },
]

const symptoms = [
  { icon: "Gauge", text: "Система заметно тормозит" },
  { icon: "MonitorX", text: "Синий экран смерти (BSOD)" },
  { icon: "AppWindow", text: "Всплывающие рекламные окна" },
  { icon: "FolderX", text: "Файлы не открываются или исчезают" },
]

const algorithmSteps = [
  { num: "01", icon: "ShieldCheck", label: "Установить антивирус", sub: "Kaspersky, Dr.Web или Windows Defender" },
  { num: "02", icon: "RefreshCcw", label: "Обновлять систему", sub: "Закрывайте уязвимости своевременно" },
  { num: "03", icon: "LinkIcon", label: "Проверять ссылки", sub: "Не кликайте по подозрительным URL" },
  { num: "04", icon: "KeyRound", label: "Включить 2FA", sub: "Двухфакторная аутентификация везде" },
]

const antiviruses = [
  {
    name: "Kaspersky",
    pros: "Высокий уровень обнаружения, богатый функционал",
    cons: "Платный, потребляет ресурсы ПК",
  },
  {
    name: "Dr.Web",
    pros: "Отечественный, хорош против новых угроз",
    cons: "Интерфейс устарел, высокая цена",
  },
  {
    name: "Windows Defender",
    pros: "Бесплатный, встроен в систему",
    cons: "Базовый уровень защиты",
  },
]

export const sections: Section[] = [
  {
    id: "slide-1",
    label: "Исследовательский проект · 2025",
    title: "Компьютерные вирусы:\nкак защитить себя в цифровом мире",
    customContent: (
      <div className="space-y-4 mt-2">
        <div className="text-neutral-500 text-sm font-mono space-y-1">
          <p>Иванов Иван Иванович, 9 «А» класс</p>
          <p>Москва, 2025</p>
        </div>
        <img
          src="https://cdn.poehali.dev/projects/c08b3403-05dd-41dd-8b07-abc622190b99/files/abcfd8b2-1910-413f-b0e6-274905aabf7b.jpg"
          alt="Cybersecurity"
          className="w-48 h-48 object-cover rounded-2xl opacity-70 border border-neutral-800"
        />
      </div>
    ),
  },
  {
    id: "slide-2",
    label: "Слайд 2 — Введение",
    title: "Почему это актуально?",
    customContent: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 max-w-3xl">
        <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-950/50">
          <p className="text-3xl font-bold text-[#FF4D00]">+58%</p>
          <p className="text-sm text-neutral-400 mt-1">рост кибератак на частных пользователей за 2024 год</p>
        </div>
        <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-950/50">
          <p className="text-3xl font-bold text-[#FF4D00]">≈300 000</p>
          <p className="text-sm text-neutral-400 mt-1">новых вредоносных программ появляется каждый день</p>
        </div>
        <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-950/50">
          <p className="text-3xl font-bold text-[#FF4D00]">#1</p>
          <p className="text-sm text-neutral-400 mt-1">угроза для школьников — фишинг и кража данных</p>
        </div>
        <div className="md:col-span-3 mt-1">
          <p className="text-neutral-400 text-base">
            <span className="text-white font-semibold">Цель проекта:</span> изучить основные виды вирусов и разработать практический алгоритм защиты для каждого пользователя.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "slide-3",
    label: "Слайд 3 — Определение",
    title: "Что такое компьютерный вирус?",
    customContent: (
      <div className="max-w-2xl space-y-5">
        <div className="border-l-2 border-[#FF4D00] pl-5">
          <p className="text-white text-lg leading-relaxed">
            Компьютерный вирус — это <span className="text-[#FF4D00] font-semibold">вредоносный программный код</span>, способный к саморазмножению: он копирует себя и встраивается в другие файлы или программы.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-neutral-800 rounded-xl p-4 bg-neutral-950/50">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="Bug" size={18} className="text-red-400" />
              <span className="text-white text-sm font-semibold">Вирус</span>
            </div>
            <p className="text-neutral-400 text-sm">Намеренно создан для вреда. Распространяется самостоятельно. Скрывает своё присутствие.</p>
          </div>
          <div className="border border-neutral-800 rounded-xl p-4 bg-neutral-950/50">
            <div className="flex items-center gap-2 mb-2">
              <Icon name="Code" size={18} className="text-blue-400" />
              <span className="text-white text-sm font-semibold">Обычная ошибка в программе</span>
            </div>
            <p className="text-neutral-400 text-sm">Случайный дефект кода. Не распространяется. Не скрывается от пользователя.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "slide-4",
    label: "Слайд 4 — Классификация",
    title: "Классификация врага",
    customContent: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
        {virusTypes.map((v) => (
          <div key={v.name} className="border border-neutral-800 rounded-xl p-5 bg-neutral-950/50 flex gap-4 items-start">
            <Icon name={v.icon as "Skull"} size={22} className={v.color} fallback="AlertTriangle" />
            <div>
              <p className="text-white font-semibold">{v.name}</p>
              <p className="text-neutral-400 text-sm mt-1">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "slide-5",
    label: "Слайд 5 — Пути заражения",
    title: "Как вирус попадает на компьютер?",
    customContent: (
      <div className="space-y-4 max-w-xl mt-2">
        {infectionPaths.map((p, i) => (
          <div key={i} className="flex items-center gap-4 border border-neutral-800 rounded-xl p-4 bg-neutral-950/50">
            <div className="w-10 h-10 rounded-full bg-[#FF4D00]/10 flex items-center justify-center shrink-0">
              <Icon name={p.icon as "Mail"} size={18} className="text-[#FF4D00]" fallback="AlertCircle" />
            </div>
            <p className="text-white text-base">{p.text}</p>
          </div>
        ))}
        <p className="text-neutral-500 text-sm pt-2">
          Большинство заражений происходит из-за невнимательности пользователя, а не технических уязвимостей.
        </p>
      </div>
    ),
  },
  {
    id: "slide-6",
    label: "Слайд 6 — Признаки заражения",
    title: "Как понять, что компьютер заражён?",
    customContent: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mt-2">
        {symptoms.map((s, i) => (
          <div key={i} className="flex items-center gap-3 border border-neutral-800 rounded-xl p-4 bg-neutral-950/50">
            <Icon name={s.icon as "Gauge"} size={20} className="text-yellow-400 shrink-0" fallback="AlertTriangle" />
            <p className="text-neutral-300 text-sm">{s.text}</p>
          </div>
        ))}
        <div className="sm:col-span-2 border border-yellow-900/40 rounded-xl p-4 bg-yellow-950/20 flex gap-3 items-start">
          <Icon name="AlertTriangle" size={18} className="text-yellow-500 mt-0.5 shrink-0" />
          <p className="text-yellow-200/80 text-sm">
            Если заметили несколько признаков одновременно — немедленно отключитесь от интернета и запустите полную проверку антивирусом.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "slide-7",
    label: "Слайд 7 — Мой продукт",
    title: "Алгоритм защиты",
    customContent: (
      <div className="max-w-3xl mt-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {algorithmSteps.map((s, i) => (
            <div key={i} className="border border-neutral-800 rounded-xl p-4 bg-neutral-950/50 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#FF4D00]">{s.num}</span>
                <Icon name={s.icon as "ShieldCheck"} size={18} className="text-neutral-500" fallback="Shield" />
              </div>
              <p className="text-white text-sm font-semibold leading-snug">{s.label}</p>
              <p className="text-neutral-500 text-xs">{s.sub}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3 border border-neutral-800 rounded-xl p-4 bg-neutral-950/50">
          <Icon name="QrCode" size={40} className="text-neutral-600 shrink-0" />
          <div>
            <p className="text-white text-sm font-semibold">QR-код для скачивания памятки (PDF)</p>
            <p className="text-neutral-500 text-xs mt-0.5">Готовая инфографика с алгоритмом защиты — можно распечатать и повесить рядом с компьютером</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "slide-8",
    label: "Слайд 8 — Сравнение антивирусов",
    title: "Какой антивирус выбрать?",
    customContent: (
      <div className="max-w-2xl mt-2 space-y-3">
        {antiviruses.map((a) => (
          <div key={a.name} className="border border-neutral-800 rounded-xl p-4 bg-neutral-950/50 grid grid-cols-3 gap-4 items-start">
            <p className="text-white font-semibold">{a.name}</p>
            <div className="flex items-start gap-2">
              <Icon name="ThumbsUp" size={14} className="text-green-400 mt-0.5 shrink-0" />
              <p className="text-neutral-400 text-xs leading-snug">{a.pros}</p>
            </div>
            <div className="flex items-start gap-2">
              <Icon name="ThumbsDown" size={14} className="text-red-400 mt-0.5 shrink-0" />
              <p className="text-neutral-400 text-xs leading-snug">{a.cons}</p>
            </div>
          </div>
        ))}
        <div className="border border-[#FF4D00]/30 rounded-xl p-4 bg-[#FF4D00]/5 flex gap-3 items-start">
          <Icon name="Star" size={16} className="text-[#FF4D00] mt-0.5 shrink-0" />
          <p className="text-neutral-300 text-sm">
            <span className="text-white font-semibold">Вывод:</span> для школьника оптимален <span className="text-[#FF4D00]">Windows Defender</span> — он бесплатен, встроен в систему и не требует настройки. При желании усилить защиту — Dr.Web.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "slide-9",
    label: "Слайд 9 — Заключение",
    title: "Главный вывод",
    customContent: (
      <div className="max-w-2xl space-y-5 mt-2">
        <div className="border-l-2 border-[#FF4D00] pl-5">
          <p className="text-white text-lg leading-relaxed">
            <span className="text-[#FF4D00] font-semibold">100% защиты не существует.</span> Любой антивирус — лишь инструмент. Главная защита — это внимательный и осведомлённый пользователь.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { icon: "Brain", text: "Цифровая грамотность важнее любого ПО" },
            { icon: "RefreshCcw", text: "Регулярные обновления закрывают уязвимости" },
            { icon: "ShieldCheck", text: "Простые привычки защищают лучше сложных программ" },
          ].map((item, i) => (
            <div key={i} className="border border-neutral-800 rounded-xl p-4 bg-neutral-950/50 flex flex-col gap-2">
              <Icon name={item.icon as "Brain"} size={18} className="text-[#FF4D00]" fallback="Shield" />
              <p className="text-neutral-300 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "slide-10",
    label: "Слайд 10",
    title: "Спасибо за внимание!",
    customContent: (
      <div className="space-y-4 max-w-lg mt-2">
        <p className="text-neutral-400 text-lg">Готов ответить на ваши вопросы.</p>
        <div className="border border-neutral-800 rounded-xl p-5 bg-neutral-950/50 space-y-2">
          <div className="flex items-center gap-3">
            <Icon name="User" size={16} className="text-[#FF4D00]" />
            <span className="text-neutral-300 text-sm">Иванов Иван Иванович, 9 «А» класс</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="Mail" size={16} className="text-[#FF4D00]" />
            <span className="text-neutral-300 text-sm">ivanov@school.ru</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="MapPin" size={16} className="text-[#FF4D00]" />
            <span className="text-neutral-300 text-sm">Москва, 2025</span>
          </div>
        </div>
      </div>
    ),
  },
]