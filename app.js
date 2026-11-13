/**
 * TutorHub Pro - Quản Lý Gia Sư 4 Lớp Học Thông Minh
 * Senior UI/UX & Frontend Architecture
 */

// --- INITIAL DEFAULT DATA (4 LỚP HỌC MẪU CHUYÊN SÂU) ---
const DEFAULT_CLASSES = [{"id":"class-1","name":"Toán 6 - FLC HH4","student":"Khôi","subject":"Toán 6","schedule":"Thứ Ba (19:30 - 21:30)","feePerSession":180000,"color":"indigo","colorHex":"#4f46e5","parentName":"Chú Bộ","phone":"Vô Thường","target":""},{"id":"class-2","name":"Toán 11 - Tân Mai","student":"Minh","subject":"Toán","schedule":"Thứ 4+7 (17:00 - 19:00)","feePerSession":180000,"color":"emerald","colorHex":"#10b981","parentName":"Cô Lan","phone":"","target":""},{"id":"class-3","name":"Toán 6 - Sky Garden gần cầu vĩnh tuy","student":"Sơn","subject":"Toán 6","schedule":"Thứ Sáu (19:30- 21:30)","feePerSession":180000,"color":"purple","colorHex":"#a855f7","parentName":"chị Thuỷ","phone":"0982901016","target":""},{"id":"class-4","name":"Toán 6_ Lê Văn Lương","student":"","subject":"toán","schedule":"Thứ 5 (18:00-20:00)","feePerSession":180000,"color":"amber","colorHex":"#f59e0b","parentName":"Cô Quỳnh Anh","phone":"0979779790","target":""}];

// Helper to get formatted current month string 'YYYY-MM'
function getCurrentMonthString() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
}

// Generate realistic default sessions for current month
function generateDefaultSessions() {
  return [{"id":"sess-1794561464385","classId":"class-4","status":"completed","date":"2026-11-12","time":"18:00","duration":120,"topic":"test kiến thức","details":"các dạng bài cơ bản số tự nhiên và hình học\nso sánh, cộng trừ nhân chia số nguyên","homeworkTitle":"bài tập khoanh bút đỏ trong phiếu","homeworkDeadline":"2026-11-18","homeworkStatus":"pending","homeworkScore":"","rating":4,"notes":"","fee":180000},{"id":"sess-1794362999275","classId":"class-1","status":"completed","date":"2026-11-10","time":"19:30","duration":135,"topic":"ƯCLN, BCNN","details":"","homeworkTitle":"bà tập khoanh trong đề cương","homeworkDeadline":"","homeworkStatus":"pending","homeworkScore":"","rating":4,"notes":"","fee":180000},{"id":"sess-1794277472570","classId":"class-3","status":"completed","date":"2026-11-09","time":"19:30","duration":135,"topic":"số nguyên","details":"","homeworkTitle":"","homeworkDeadline":"","homeworkStatus":"none","homeworkScore":"","rating":4,"notes":"","fee":180000},{"id":"sess-1793797856655","classId":"class-1","status":"completed","date":"2026-11-03","time":"19:30","duration":120,"topic":"Ôn thì giữa học kì 1","details":"","homeworkTitle":"","homeworkDeadline":"","homeworkStatus":"none","homeworkScore":"","rating":3,"notes":"","fee":180000}];
}

// Generate realistic default Exam & Resource bank for 4 classes
function generateDefaultExams() {
  return [
    {
        "id":  "exam-1793847151367",
        "classId":  "all",
        "category":  "Đề thi thử",
        "title":  "20 BÀI TẬP CHƯƠNG 3 SỐ NGUYÊN",
        "difficulty":  "Khá",
        "durationMinutes":  "90",
        "year":  "",
        "examUrl":  "https://drive.google.com/file/d/1jKphXRIA1RE0tPg4MNDKFxlbXEC3QHPh/view?usp=drive_link",
        "solutionUrl":  "https://drive.google.com/file/d/1SPKks8liaIyvYPAmq7n1VNSPKGhSjnjc/view?usp=drive_link",
        "notes":  "",
        "tags":  [
                     "Đề thi thử",
                     "Khá"
                 ]
    },
    {
        "id":  "exam-1793847059746",
        "classId":  "all",
        "category":  "Đề thi học kỳ",
        "title":  "KHO ĐỀ THI CK1",
        "difficulty":  "Khá",
        "durationMinutes":  "90",
        "year":  "26-27",
        "examUrl":  "https://drive.google.com/drive/folders/198zMhMPdPQV_3Aop0oVnOsmytrZmHhAv?usp=drive_link",
        "solutionUrl":  "",
        "notes":  "",
        "tags":  [
                     "Đề thi học kỳ",
                     "Khá"
                 ]
    },
    {
        "id":  "exam-1793846995602",
        "classId":  "all",
        "category":  "Đề thi thử",
        "title":  "BÀI TẬP CHƯƠNG 9",
        "difficulty":  "Cơ bản",
        "durationMinutes":  "",
        "year":  "",
        "examUrl":  "https://drive.google.com/file/d/1leBWP1aBE29u-HPBRYxlFFC0MbQ6OAZe/view?usp=drive_link",
        "solutionUrl":  "https://drive.google.com/file/d/1Li6bb5s7MMe22iBkAMdZ08CWSx9vB3wT/view?usp=drive_link",
        "notes":  "",
        "tags":  [
                     "Đề thi thử",
                     "Cơ bản"
                 ]
    },
    {
        "id":  "exam-1793846957908",
        "classId":  "all",
        "category":  "Đề thi thử",
        "title":  "CHƯƠNG 9",
        "difficulty":  "Cơ bản",
        "durationMinutes":  "",
        "year":  "",
        "examUrl":  "https://docs.google.com/document/d/1InNpJGyIyl7RgfHOkAc5gH50KC8vKFlH/edit?usp=drive_link\u0026ouid=102173829098993468380\u0026rtpof=true\u0026sd=true",
        "solutionUrl":  "",
        "notes":  "",
        "tags":  [
                     "Đề thi thử",
                     "Cơ bản"
                 ]
    },
    {
        "id":  "exam-1793846932379",
        "classId":  "all",
        "category":  "Chuyên đề ôn tập",
        "title":  "20 BÀI TẬP CHƯƠNG 8",
        "difficulty":  "Cơ bản",
        "durationMinutes":  "",
        "year":  "",
        "examUrl":  "https://drive.google.com/file/d/1iuSBNpgU8mBc5RMuoFuTa7q5IQ_SHuvM/view?usp=drive_link",
        "solutionUrl":  "https://drive.google.com/file/d/1AIiptSwF3_nxCHHg3CuXDTsLH14yhYCK/view?usp=drive_link",
        "notes":  "",
        "tags":  [
                     "Chuyên đề ôn tập",
                     "Cơ bản"
                 ]
    },
    {
        "id":  "exam-1793846886710",
        "classId":  "all",
        "category":  "Tài liệu công thức",
        "title":  "CHƯƠNG 8",
        "difficulty":  "Cơ bản",
        "durationMinutes":  "",
        "year":  "",
        "examUrl":  "https://docs.google.com/document/d/17bm1gH5lh-837MxZ0K93Muagbnx0yhUh/edit?usp=drive_link\u0026ouid=102173829098993468380\u0026rtpof=true\u0026sd=true",
        "solutionUrl":  "",
        "notes":  "",
        "tags":  [
                     "Tài liệu công thức",
                     "Cơ bản"
                 ]
    },
    {
        "id":  "exam-1793846852440",
        "classId":  "all",
        "category":  "Chuyên đề ôn tập",
        "title":  "20 BÀI TẬP CHƯƠNG 6+7",
        "difficulty":  "Cơ bản",
        "durationMinutes":  "",
        "year":  "",
        "examUrl":  "https://drive.google.com/file/d/1-RCOTr5E4mVGVUYDCZksHYw-NS5KPz1_/view?usp=drive_link",
        "solutionUrl":  "https://drive.google.com/file/d/1jSXheX1SbJK690OdJKpBFlpwNsf3a9lR/view?usp=drive_link",
        "notes":  "",
        "tags":  [
                     "Chuyên đề ôn tập",
                     "Cơ bản"
                 ]
    },
    {
        "id":  "exam-1793846819836",
        "classId":  "all",
        "category":  "Tài liệu công thức",
        "title":  "CHƯƠNG 6+7",
        "difficulty":  "Cơ bản",
        "durationMinutes":  "",
        "year":  "",
        "examUrl":  "https://docs.google.com/document/d/1-l0yQeiyvqEykNPaaIjlNqe8M1VmixCA/edit?usp=drive_link\u0026ouid=102173829098993468380\u0026rtpof=true\u0026sd=true",
        "solutionUrl":  "",
        "notes":  "",
        "tags":  [
                     "Tài liệu công thức",
                     "Cơ bản"
                 ]
    },
    {
        "id":  "exam-1793846701130",
        "classId":  "all",
        "category":  "Chuyên đề ôn tập",
        "title":  "20 BÀI TẬP CHƯƠNG 4+5",
        "difficulty":  "Khá",
        "durationMinutes":  "",
        "year":  "",
        "examUrl":  "https://drive.google.com/file/d/1X9Ysp3wdvyysTTyZPpVcP3WDspVjZQqo/view?usp=drive_link",
        "solutionUrl":  "https://drive.google.com/file/d/1RSYB7NI_EwoT6ATM89Deve4hgPeVVy-7/view?usp=drive_link",
        "notes":  "",
        "tags":  [
                     "Chuyên đề ôn tập",
                     "Khá"
                 ]
    },
    {
        "id":  "exam-1793801210580",
        "classId":  "all",
        "category":  "Tài liệu công thức",
        "title":  "Chương 4+5: Hình Học Trực Quan",
        "difficulty":  "Cơ bản",
        "durationMinutes":  "",
        "year":  "",
        "examUrl":  "https://drive.google.com/file/d/1NOFZUBsKpxMdqZbOChWYsuHrkp5VKmnj/view?usp=drive_link",
        "solutionUrl":  "",
        "notes":  "",
        "tags":  [
                     "Tài liệu công thức",
                     "Cơ bản"
                 ]
    },
    {
        "id":  "exam-1793799158371",
        "classId":  "all",
        "category":  "Tài liệu công thức",
        "title":  "Chương 2: Số Nguyên",
        "difficulty":  "Cơ bản",
        "durationMinutes":  "",
        "year":  "",
        "examUrl":  "https://drive.google.com/file/d/1EAGnAbGqnw_avzRkck0dVWmH4ARDyNbL/view?usp=drive_link",
        "solutionUrl":  "https://drive.google.com/file/d/1v346_GmcZYz78xr3_4nMorTmbXFMQZih/view?usp=drive_link",
        "notes":  "",
        "tags":  [
                     "Tài liệu công thức",
                     "Cơ bản"
                 ]
    },
    {
        "id":  "exam-103",
        "classId":  "all",
        "title":  "Ôn GK1",
        "category":  "Chuyên đề ôn tập",
        "difficulty":  "Khá",
        "durationMinutes":  "90 phút",
        "year":  "2026",
        "examUrl":  "https://drive.google.com/file/d/1FgOIPSTQ1n0sMXEG1-AKnVaFRVIZzAhz/view?usp=drive_link",
        "solutionUrl":  "",
        "notes":  "",
        "tags":  [
                     "Giữa Kỳ 1",
                     "Toán 12"
                 ]
    }
];
}

// --- DEFAULT SETTINGS & VIETQR CONFIGURATION ---
const DEFAULT_SYNC_ROOM = 'giasu-hoang030206';
const ONLINE_PRODUCTION_URL = 'https://hoang030206dz-cyber.github.io/tutor-hub/';

const DEFAULT_SETTINGS = {
  bankId: 'MB',
  bankAccount: '',
  bankAccountName: '',
  syncCode: DEFAULT_SYNC_ROOM,
  adminPin: '1234',
  tuitionStatus: {} // { 'class-1-2026-11': 'paid' | 'unpaid' }
};

// --- APP STATE & LOCAL STORAGE CONTROLLER ---
const AppState = {
  classes: [],
  sessions: [],
  exams: [],
  settings: { ...DEFAULT_SETTINGS },
  currentClassId: 'all', // 'all' or 'class-1', 'class-2', 'class-3', 'class-4'
  currentMonth: getCurrentMonthString(), // 'YYYY-MM'
  activeTab: 'sessions', // 'sessions', 'calendar', 'homework', 'exams', 'report', 'settings'
  searchSessionQuery: '',
  searchExamQuery: '',
  sessionFilterStatus: 'all',
  homeworkFilterStatus: 'all',
  examCategoryFilter: 'all',
  theme: 'light',

  init() {
    this.loadFromStorage();
    this.applyTheme();
  },

  loadFromStorage() {
    try {
      const storedClasses = localStorage.getItem('tutortrack_classes');
      const storedSessions = localStorage.getItem('tutortrack_sessions');
      const storedExams = localStorage.getItem('tutortrack_exams');
      const storedTheme = localStorage.getItem('tutortrack_theme');
      const storedSettings = localStorage.getItem('tutortrack_settings');

      // Auto-heal: If localStorage has dummy sample data ("Nguyễn Hoàng Nam" / "Lớp 12A"), restore user genuine data
      const isDummyStorage = storedClasses && (storedClasses.includes('Nguyễn Hoàng Nam') || storedClasses.includes('Lớp 12A - Toán THPT'));

      this.classes = (storedClasses && !isDummyStorage) ? JSON.parse(storedClasses) : DEFAULT_CLASSES;
      this.sessions = (storedSessions && !isDummyStorage) ? JSON.parse(storedSessions) : generateDefaultSessions();
      this.exams = (storedExams && !isDummyStorage) ? JSON.parse(storedExams) : generateDefaultExams();
      this.theme = storedTheme || 'dark';
      this.settings = storedSettings ? { ...DEFAULT_SETTINGS, ...JSON.parse(storedSettings) } : { ...DEFAULT_SETTINGS };

      // Ensure consistent syncCode across all devices
      if (!this.settings.syncCode || (this.settings.syncCode.startsWith('giasu-') && this.settings.syncCode.length <= 15 && this.settings.syncCode !== DEFAULT_SYNC_ROOM)) {
        this.settings.syncCode = DEFAULT_SYNC_ROOM;
      }

      // Ensure all exams are marked as shared ('all') so all classes can access them
      if (this.exams && this.exams.length > 0) {
        let examsUpdated = false;
        this.exams.forEach(ex => {
          if (!ex.classId || ex.classId !== 'all') {
            ex.classId = 'all';
            examsUpdated = true;
          }
        });
        if (examsUpdated) this.saveToStorage();
      }

      // Save state if newly initialized or healed
      if (!storedClasses || isDummyStorage) this.saveToStorage();
    } catch (e) {
      console.error('Error loading state from localStorage:', e);
      this.classes = DEFAULT_CLASSES;
      this.sessions = generateDefaultSessions();
      this.exams = generateDefaultExams();
      this.settings = { ...DEFAULT_SETTINGS };
      this.theme = 'dark';
    }
  },

  saveToStorage(fromRemote = false) {
    try {
      localStorage.setItem('tutortrack_classes', JSON.stringify(this.classes));
      localStorage.setItem('tutortrack_sessions', JSON.stringify(this.sessions));
      localStorage.setItem('tutortrack_exams', JSON.stringify(this.exams));
      localStorage.setItem('tutortrack_settings', JSON.stringify(this.settings));
      localStorage.setItem('tutortrack_theme', this.theme);

      // Trigger Realtime Cloud Sync
      if (!fromRemote && typeof CloudSync !== 'undefined' && CloudSync.pushUpdate) {
        CloudSync.pushUpdate();
      }
    } catch (e) {
      console.error('Error saving state to localStorage:', e);
      showToast('Bộ nhớ trình duyệt đầy hoặc không thể lưu dữ liệu!', 'error');
    }
  },

  exportAllData() {
    return {
      classes: this.classes,
      sessions: this.sessions,
      exams: this.exams,
      settings: this.settings,
      timestamp: Date.now()
    };
  },

  importAllData(payload, fromRemote = false) {
    if (!payload || !payload.classes || !payload.sessions) return;
    this.classes = payload.classes;
    this.sessions = payload.sessions;
    if (payload.exams) this.exams = payload.exams;
    if (payload.settings) {
      this.settings = { ...this.settings, ...payload.settings };
    }
    this.saveToStorage(fromRemote);
    renderAll();
    if (typeof isParentPortalMode === 'function' && isParentPortalMode()) {
      renderParentPortal(currentParentClassId);
    }
  },

  applyTheme() {
    const html = document.documentElement;
    if (this.theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('tutortrack_theme', this.theme);
  },

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme();
    showToast(`Đã chuyển sang giao diện ${this.theme === 'dark' ? 'Tối (Dark Mode)' : 'Sáng (Light Mode)'}`, 'info');
  },

  getClassById(id) {
    return this.classes.find(c => c.id === id);
  },

  // Filtered sessions for current class & month
  getCurrentFilteredSessions() {
    return this.sessions.filter(sess => {
      // Month match
      const sessionMonth = sess.date.substring(0, 7);
      if (sessionMonth !== this.currentMonth) return false;

      // Class match
      if (this.currentClassId !== 'all' && sess.classId !== this.currentClassId) return false;

      // Status match
      if (this.sessionFilterStatus !== 'all' && sess.status !== this.sessionFilterStatus) return false;

      // Search query
      if (this.searchSessionQuery.trim()) {
        const q = this.searchSessionQuery.toLowerCase();
        const matchTopic = sess.topic && sess.topic.toLowerCase().includes(q);
        const matchDetails = sess.details && sess.details.toLowerCase().includes(q);
        const matchHW = sess.homeworkTitle && sess.homeworkTitle.toLowerCase().includes(q);
        const cl = this.getClassById(sess.classId);
        const matchClass = cl && (cl.name.toLowerCase().includes(q) || cl.student.toLowerCase().includes(q));
        if (!matchTopic && !matchDetails && !matchHW && !matchClass) return false;
      }

      return true;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  },

  // Filtered exams for current class
  getCurrentFilteredExams() {
    return this.exams.filter(exam => {
      // Class filter: Always show if exam is shared ('all' or not set), or matches current class, or viewing all classes
      if (this.currentClassId !== 'all' && exam.classId && exam.classId !== 'all' && exam.classId !== this.currentClassId) return false;

      // Category filter
      if (this.examCategoryFilter !== 'all' && exam.category !== this.examCategoryFilter) return false;

      // Search query
      if (this.searchExamQuery.trim()) {
        const q = this.searchExamQuery.toLowerCase();
        const matchTitle = exam.title && exam.title.toLowerCase().includes(q);
        const matchNotes = exam.notes && exam.notes.toLowerCase().includes(q);
        const matchTags = exam.tags && exam.tags.some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchNotes && !matchTags) return false;
      }

      return true;
    });
  }
};

// --- TOAST NOTIFICATION UTILITY ---
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  let iconHtml = '<i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-500 shrink-0"></i>';
  if (type === 'error') {
    iconHtml = '<i data-lucide="alert-circle" class="w-5 h-5 text-rose-500 shrink-0"></i>';
  } else if (type === 'info') {
    iconHtml = '<i data-lucide="info" class="w-5 h-5 text-indigo-500 shrink-0"></i>';
  } else if (type === 'warning') {
    iconHtml = '<i data-lucide="alert-triangle" class="w-5 h-5 text-amber-500 shrink-0"></i>';
  }

  toast.innerHTML = `
    ${iconHtml}
    <div class="flex-1 text-xs sm:text-sm text-slate-800 dark:text-slate-100">${message}</div>
    <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
      <i data-lucide="x" class="w-4 h-4"></i>
    </button>
  `;

  container.appendChild(toast);
  lucide.createIcons({ root: toast });

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(60px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Celebration Confetti
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  }
}

// Format Currency VNĐ
function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount || 0);
}

// Format Date 'YYYY-MM-DD' to Vietnamese 'dd/mm/yyyy'
function formatDateVN(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

// Format Day of Week in VN
function getDayOfWeekVN(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  return days[date.getDay()];
}

// --- RENDER FUNCTIONS ---

// Render Class Tabs in Header
function renderClassTabs() {
  const container = document.getElementById('class-tabs-container');
  if (!container) return;

  const isAllActive = AppState.currentClassId === 'all';
  let html = `
    <button class="class-tab-btn flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${isAllActive ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-xs' : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'}" data-class-id="all">
      <i data-lucide="layout-grid" class="w-3.5 h-3.5"></i>
      <span>Tất Cả 4 Lớp</span>
    </button>
  `;

  AppState.classes.forEach(c => {
    const isActive = AppState.currentClassId === c.id;
    html += `
      <button class="class-tab-btn flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${isActive ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-xs' : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'}" data-class-id="${c.id}">
        <span class="w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white dark:bg-slate-900' : 'bg-slate-400 dark:bg-slate-500'}"></span>
        <span>${c.name}</span>
        <span class="text-[10px] ${isActive ? 'text-slate-300 dark:text-slate-600' : 'text-slate-400 dark:text-slate-500'} hidden md:inline">(${c.student.split(' ')[0]})</span>
      </button>
    `;
  });

  container.innerHTML = html;
  lucide.createIcons({ root: container });

  // Attach click events
  container.querySelectorAll('.class-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      AppState.currentClassId = btn.getAttribute('data-class-id');
      renderAll();
    });
  });
}

// Render Header Month Display
function renderMonthDisplay() {
  const label = document.getElementById('current-month-display');
  if (!label) return;

  const [y, m] = AppState.currentMonth.split('-');
  label.textContent = `Tháng ${parseInt(m, 10)}/${y}`;

  const calTitle = document.getElementById('calendar-title-display');
  if (calTitle) calTitle.textContent = `Lịch Dạy Tháng ${parseInt(m, 10)}/${y}`;
}

// Render Top 4 Stat Cards
function renderStats() {
  const sessions = AppState.getCurrentFilteredSessions();
  const completedSessions = sessions.filter(s => s.status === 'completed' || s.status === 'makeup');

  // Total sessions count
  const countEl = document.getElementById('stat-sessions-count');
  if (countEl) countEl.textContent = completedSessions.length;

  const subEl = document.getElementById('stat-sessions-sub');
  if (subEl) {
    if (AppState.currentClassId === 'all') {
      subEl.textContent = `buổi (Tổng 4 lớp)`;
    } else {
      const cl = AppState.getClassById(AppState.currentClassId);
      subEl.textContent = `buổi (${cl ? cl.student : ''})`;
    }
  }

  // Calculate Tuition
  let totalTuition = 0;
  completedSessions.forEach(s => {
    const cl = AppState.getClassById(s.classId);
    const fee = s.fee || (cl ? cl.feePerSession : 250000);
    totalTuition += fee;
  });

  const tuitionEl = document.getElementById('stat-tuition-total');
  if (tuitionEl) tuitionEl.textContent = formatVND(totalTuition);

  const tuitionDetailEl = document.getElementById('stat-tuition-detail');
  if (tuitionDetailEl) {
    tuitionDetailEl.textContent = `Từ ${completedSessions.length} buổi đã dạy hoàn thành`;
  }

  // Homework stats
  const allHomework = sessions.filter(s => s.homeworkTitle && s.homeworkStatus !== 'none');
  const submittedHomework = allHomework.filter(s => s.homeworkStatus === 'submitted' || s.homeworkStatus === 'graded');
  const pendingHomework = allHomework.filter(s => s.homeworkStatus === 'pending');

  const hwCountEl = document.getElementById('stat-homework-count');
  if (hwCountEl) hwCountEl.textContent = allHomework.length;

  const hwSubEl = document.getElementById('stat-homework-submitted');
  if (hwSubEl) hwSubEl.textContent = `${submittedHomework.length} đã nộp`;

  const hwPendingEl = document.getElementById('stat-homework-pending');
  if (hwPendingEl) {
    hwPendingEl.textContent = `${pendingHomework.length} bài đang chờ nộp`;
  }

  // Homework tab badge
  const hwBadge = document.getElementById('badge-homework-pending');
  if (hwBadge) {
    if (pendingHomework.length > 0) {
      hwBadge.textContent = pendingHomework.length;
      hwBadge.classList.remove('hidden');
    } else {
      hwBadge.classList.add('hidden');
    }
  }

  // Exam stats
  const exams = AppState.getCurrentFilteredExams();
  const examCountEl = document.getElementById('stat-exam-count');
  if (examCountEl) examCountEl.textContent = exams.length;
}

// Render Sessions Table (Tab 1)
function renderSessionsTable() {
  const tbody = document.getElementById('sessions-table-body');
  const emptyState = document.getElementById('sessions-empty-state');
  if (!tbody || !emptyState) return;

  const sessions = AppState.getCurrentFilteredSessions();

  if (sessions.length === 0) {
    tbody.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  let html = '';
  sessions.forEach(sess => {
    const cl = AppState.getClassById(sess.classId) || { name: 'Lớp học', student: '', color: 'indigo' };
    const dateFormatted = formatDateVN(sess.date);
    const dayOfWeek = getDayOfWeekVN(sess.date);

    // Status Badge
    let statusBadge = '';
    if (sess.status === 'completed') {
      statusBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold badge-completed"><i data-lucide="check" class="w-3 h-3"></i> Đã dạy</span>`;
    } else if (sess.status === 'makeup') {
      statusBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold badge-makeup"><i data-lucide="refresh-cw" class="w-3 h-3"></i> Buổi bù</span>`;
    } else if (sess.status === 'upcoming') {
      statusBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold badge-upcoming"><i data-lucide="clock" class="w-3 h-3"></i> Sắp tới</span>`;
    } else {
      statusBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold badge-cancelled"><i data-lucide="x-circle" class="w-3 h-3"></i> Nghỉ / Bận</span>`;
    }

    // Homework preview
    let hwHtml = '<span class="text-slate-400 text-xs italic">Không giao bài tập</span>';
    if (sess.homeworkTitle) {
      let hwStatusBadge = '';
      if (sess.homeworkStatus === 'graded') {
        hwStatusBadge = `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">Điểm: ${sess.homeworkScore || 'Đạt'}</span>`;
      } else if (sess.homeworkStatus === 'submitted') {
        hwStatusBadge = `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Đã nộp</span>`;
      } else {
        hwStatusBadge = `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300">Chờ nộp</span>`;
      }

      hwHtml = `
        <div class="space-y-1">
          <div class="text-xs font-medium text-slate-800 dark:text-slate-200 line-clamp-1" title="${sess.homeworkTitle}">${sess.homeworkTitle}</div>
          <div class="flex items-center gap-1.5">
            ${hwStatusBadge}
            ${sess.homeworkDeadline ? `<span class="text-[10px] text-slate-400">Hạn: ${formatDateVN(sess.homeworkDeadline)}</span>` : ''}
          </div>
        </div>
      `;
    }

    // Rating stars
    let stars = '';
    const ratingNum = sess.rating || 4;
    for (let i = 1; i <= 5; i++) {
      stars += i <= ratingNum ? '⭐' : '☆';
    }

    html += `
      <tr class="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
        <!-- Lớp & Học sinh -->
        <td class="py-3.5 px-4 whitespace-nowrap">
          <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">${cl.name}</div>
          <div class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
            <i data-lucide="user" class="w-3 h-3 text-slate-400"></i>
            <span>${cl.student}</span>
          </div>
        </td>

        <!-- Thời gian & Buổi -->
        <td class="py-3.5 px-4 whitespace-nowrap">
          <div class="font-semibold text-xs text-slate-800 dark:text-slate-200">${dayOfWeek}, ${dateFormatted}</div>
          <div class="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
            <i data-lucide="clock" class="w-3 h-3"></i>
            <span>${sess.time || '19:30'} (${sess.duration || 90}p)</span>
          </div>
        </td>

        <!-- Nội dung buổi dạy -->
        <td class="py-3.5 px-4">
          <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
            <i data-lucide="book-open" class="w-3.5 h-3.5 text-slate-400 shrink-0"></i>
            <span>${sess.topic}</span>
          </div>
          ${sess.details ? `<div class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 whitespace-pre-line leading-relaxed">${sess.details}</div>` : ''}
        </td>

        <!-- Bài tập về nhà -->
        <td class="py-3.5 px-4">
          ${hwHtml}
        </td>

        <!-- Đánh giá -->
        <td class="py-3.5 px-4 whitespace-nowrap">
          <div class="text-xs tracking-widest">${stars}</div>
          ${sess.notes ? `<div class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 max-w-[140px] mt-0.5" title="${sess.notes}">${sess.notes}</div>` : ''}
        </td>

        <!-- Trạng thái -->
        <td class="py-3.5 px-4 whitespace-nowrap">
          ${statusBadge}
        </td>

        <!-- Thao tác -->
        <td class="py-3.5 px-4 text-right whitespace-nowrap">
          <div class="flex items-center justify-end gap-1">
            <button onclick="editSession('${sess.id}')" title="Sửa buổi học" class="p-1.5 text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <i data-lucide="edit" class="w-4 h-4"></i>
            </button>
            <button onclick="deleteSession('${sess.id}')" title="Xóa buổi học" class="p-1.5 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
  lucide.createIcons({ root: tbody });
}

// Render Calendar Grid (Tab 2)
function renderCalendar() {
  const container = document.getElementById('calendar-grid-cells');
  if (!container) return;

  const [yearStr, monthStr] = AppState.currentMonth.split('-');
  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10); // 1-12

  // First day of month (0 = Sun, 1 = Mon, ...)
  const firstDay = new Date(year, month - 1, 1).getDay();
  // Total days in month
  const totalDays = new Date(year, month, 0).getDate();

  // Get sessions of current class & month
  const sessions = AppState.getCurrentFilteredSessions();

  // Map sessions by day number: { 1: [s1, s2], ... }
  const sessionsByDay = {};
  sessions.forEach(sess => {
    const dayNum = parseInt(sess.date.split('-')[2], 10);
    if (!sessionsByDay[dayNum]) sessionsByDay[dayNum] = [];
    sessionsByDay[dayNum].push(sess);
  });

  const today = new Date();
  const isCurrentMonthActual = (today.getFullYear() === year && (today.getMonth() + 1) === month);
  const todayDateNum = today.getDate();

  let html = '';

  // Blank cells before first day
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="empty-day min-h-[70px] sm:min-h-[90px] rounded-xl bg-slate-50/50 dark:bg-slate-900/30 border border-transparent"></div>`;
  }

  // Days of current month
  for (let d = 1; d <= totalDays; d++) {
    const isToday = isCurrentMonthActual && (d === todayDateNum);
    const daySessions = sessionsByDay[d] || [];
    const dateFormatted = `${year}-${String(month).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

    let sessionDotsHtml = '';
    daySessions.forEach(sess => {
      const cl = AppState.getClassById(sess.classId);
      let dotColor = 'bg-slate-900 dark:bg-slate-100';
      if (sess.status === 'upcoming') dotColor = 'bg-slate-400';
      else if (sess.status === 'makeup') dotColor = 'bg-amber-500';
      else if (sess.status === 'cancelled') dotColor = 'bg-rose-400';

      sessionDotsHtml += `
        <div class="px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 truncate cursor-pointer hover:border-slate-400 flex items-center gap-1" onclick="event.stopPropagation(); editSession('${sess.id}')" title="${cl ? cl.name : ''}: ${sess.topic}">
          <span class="w-1.5 h-1.5 rounded-full ${dotColor} shrink-0"></span>
          <span class="truncate">${sess.topic}</span>
        </div>
      `;
    });

    html += `
      <div onclick="openAddSessionForDate('${dateFormatted}')" class="cal-day-cell min-h-[70px] sm:min-h-[90px] p-1.5 sm:p-2 rounded-xl bg-white dark:bg-[#111726] border ${isToday ? 'border-slate-900 dark:border-slate-100 ring-1 ring-slate-900/10' : 'border-slate-200 dark:border-slate-800'} flex flex-col justify-between cursor-pointer hover:border-slate-400 transition-all">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold ${isToday ? 'w-5 h-5 rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 flex items-center justify-center' : 'text-slate-700 dark:text-slate-300'}">${d}</span>
          ${daySessions.length > 0 ? `<span class="text-[10px] text-slate-400">${daySessions.length} buổi</span>` : ''}
        </div>
        <div class="space-y-1 mt-1 overflow-hidden">
          ${sessionDotsHtml}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

// Render Homework Cards (Tab 3)
function renderHomework() {
  const container = document.getElementById('homework-cards-container');
  const emptyState = document.getElementById('homework-empty-state');
  if (!container || !emptyState) return;

  const sessions = AppState.getCurrentFilteredSessions().filter(s => s.homeworkTitle && s.homeworkStatus !== 'none');

  let filtered = sessions;
  if (AppState.homeworkFilterStatus !== 'all') {
    filtered = sessions.filter(s => s.homeworkStatus === AppState.homeworkFilterStatus);
  }

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  let html = '';
  filtered.forEach(sess => {
    const cl = AppState.getClassById(sess.classId) || { name: 'Lớp học', student: '' };

    let statusBadge = '';
    if (sess.homeworkStatus === 'graded') {
      statusBadge = `<span class="px-2.5 py-1 rounded-full text-xs font-semibold badge-completed flex items-center gap-1"><i data-lucide="check" class="w-3.5 h-3.5"></i> Điểm: ${sess.homeworkScore || '10/10'}</span>`;
    } else if (sess.homeworkStatus === 'submitted') {
      statusBadge = `<span class="px-2.5 py-1 rounded-full text-xs font-semibold badge-upcoming flex items-center gap-1"><i data-lucide="file-text" class="w-3.5 h-3.5"></i> Đã nộp</span>`;
    } else {
      statusBadge = `<span class="px-2.5 py-1 rounded-full text-xs font-semibold badge-makeup flex items-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5"></i> Chờ nộp</span>`;
    }

    html += `
      <div class="bg-white dark:bg-[#111726] rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 card-hover flex flex-col justify-between">
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-800 dark:text-slate-200">${cl.name}</span>
            ${statusBadge}
          </div>
          <h3 class="text-sm font-bold text-slate-900 dark:text-white leading-snug">${sess.homeworkTitle}</h3>
          <div class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span class="flex items-center gap-1"><i data-lucide="user" class="w-3 h-3 text-slate-400"></i> ${cl.student}</span>
            <span>•</span>
            <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-3 h-3 text-slate-400"></i> Buổi dạy: ${formatDateVN(sess.date)}</span>
          </div>
          ${sess.homeworkDeadline ? `
            <div class="text-xs font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1 mt-1">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i>
              <span>Hạn nộp: ${formatDateVN(sess.homeworkDeadline)}</span>
            </div>
          ` : ''}
        </div>

        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button onclick="quickUpdateHomework('${sess.id}')" class="text-xs font-semibold text-slate-900 dark:text-slate-100 hover:underline flex items-center gap-1">
            <i data-lucide="check" class="w-3.5 h-3.5"></i>
            <span>Cập nhật nộp / Chấm điểm</span>
          </button>
          <button onclick="editSession('${sess.id}')" class="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            Chi tiết
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  lucide.createIcons({ root: container });
}

// Render Exam Bank (Tab 4)
function renderExams() {
  const container = document.getElementById('exams-container');
  const emptyState = document.getElementById('exams-empty-state');
  if (!container || !emptyState) return;

  const exams = AppState.getCurrentFilteredExams();

  if (exams.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  let html = '';
  exams.forEach(ex => {
    const isAll = !ex.classId || ex.classId === 'all';
    const cl = isAll ? { name: '🌟 Dùng chung tất cả các lớp' } : (AppState.getClassById(ex.classId) || { name: 'Dùng chung' });

    let tagsHtml = '';
    if (ex.tags && ex.tags.length > 0) {
      tagsHtml = ex.tags.map(t => `<span class="px-2 py-0.5 rounded-md text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">#${t}</span>`).join(' ');
    }

    html += `
      <div class="bg-white dark:bg-[#111726] rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 card-hover flex flex-col justify-between">
        <div class="space-y-2">
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs font-bold ${isAll ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-800' : 'text-slate-800 dark:text-slate-200'} truncate">${cl.name}</span>
            <span class="text-[10px] font-medium px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 shrink-0">${ex.difficulty || 'Khá'}</span>
          </div>

          <h3 class="text-sm font-bold text-slate-900 dark:text-white leading-snug">${ex.title}</h3>

          <div class="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span class="font-medium bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">${ex.category}</span>
            ${ex.durationMinutes ? `<span>⏱ ${ex.durationMinutes}</span>` : ''}
            ${ex.year ? `<span>📅 Khóa ${ex.year}</span>` : ''}
          </div>

          ${ex.notes ? `<p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">${ex.notes}</p>` : ''}

          <div class="flex flex-wrap gap-1 pt-1">
            ${tagsHtml}
          </div>
        </div>

        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            ${ex.examUrl ? `
              <a href="${ex.examUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center gap-1 transition-colors">
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                <span>Xem Đề</span>
              </a>
            ` : ''}
            ${ex.solutionUrl ? `
              <a href="${ex.solutionUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center gap-1 transition-colors">
                <i data-lucide="file-check" class="w-3.5 h-3.5"></i>
                <span>Đáp Án</span>
              </a>
            ` : ''}
          </div>

          <div class="flex items-center gap-1">
            <button onclick="assignExamAsHomework('${ex.id}')" title="Giao đề này thành bài tập về nhà" class="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg">
              <i data-lucide="send" class="w-4 h-4"></i>
            </button>
            <button onclick="editExam('${ex.id}')" title="Sửa đề thi" class="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg">
              <i data-lucide="edit" class="w-4 h-4"></i>
            </button>
            <button onclick="deleteExam('${ex.id}')" title="Xóa đề thi" class="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  lucide.createIcons({ root: container });
}

// Render Parent Report (Tab 5)
function renderParentReport() {
  const reportSelect = document.getElementById('report-class-select');
  let selectedClassId = reportSelect ? reportSelect.value : null;

  if (!selectedClassId || selectedClassId === 'all') {
    selectedClassId = (AppState.currentClassId !== 'all') ? AppState.currentClassId : AppState.classes[0].id;
    if (reportSelect) reportSelect.value = selectedClassId;
  }

  const currentClass = AppState.getClassById(selectedClassId) || AppState.classes[0];
  const [yearStr, monthStr] = AppState.currentMonth.split('-');
  const monthInt = parseInt(monthStr, 10);

  // Filter sessions of this class in current month
  const sessions = AppState.sessions.filter(s => {
    return s.classId === currentClass.id && s.date.substring(0, 7) === AppState.currentMonth;
  }).sort((a, b) => new Date(a.date) - new Date(b.date));

  const completedSessions = sessions.filter(s => s.status === 'completed' || s.status === 'makeup');
  const cancelledSessions = sessions.filter(s => s.status === 'cancelled');
  const makeupSessions = sessions.filter(s => s.status === 'makeup');

  // Total Tuition
  const totalTuition = completedSessions.length * (currentClass.feePerSession || 250000);

  // Homework average
  const gradedHw = completedSessions.filter(s => s.homeworkStatus === 'graded' && s.homeworkScore);
  let hwSummary = `${completedSessions.filter(s => s.homeworkStatus === 'graded' || s.homeworkStatus === 'submitted').length}/${completedSessions.filter(s => s.homeworkTitle).length || 1} bài`;

  // UI Element Population
  const nameEl = document.getElementById('report-class-name');
  if (nameEl) nameEl.textContent = currentClass.name;

  const metaEl = document.getElementById('report-student-meta');
  if (metaEl) metaEl.textContent = `Học sinh: ${currentClass.student} • Phụ huynh: ${currentClass.parentName || 'Quý phụ huynh'} • SĐT: ${currentClass.phone || 'Chưa cập nhật'}`;

  const monthTagEl = document.getElementById('report-month-tag');
  if (monthTagEl) monthTagEl.textContent = `Tháng ${monthInt}/${yearStr}`;

  const sessionCountEl = document.getElementById('report-session-count');
  if (sessionCountEl) sessionCountEl.textContent = `${completedSessions.length} buổi`;

  const makeupNoteEl = document.getElementById('report-makeup-note');
  if (makeupNoteEl) makeupNoteEl.textContent = `${makeupSessions.length} buổi bù • ${cancelledSessions.length} buổi nghỉ`;

  const totalFeeEl = document.getElementById('report-total-fee');
  if (totalFeeEl) totalFeeEl.textContent = formatVND(totalTuition);

  const feeRateEl = document.getElementById('report-fee-rate-note');
  if (feeRateEl) feeRateEl.textContent = `Đơn giá: ${formatVND(currentClass.feePerSession)} / buổi`;

  const hwRateEl = document.getElementById('report-hw-rate');
  if (hwRateEl) hwRateEl.textContent = hwSummary;

  // Table rows in report
  const tbody = document.getElementById('report-sessions-tbody');
  if (tbody) {
    if (completedSessions.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" class="py-6 text-center text-slate-400">Chưa có buổi học nào được ghi nhận trong tháng ${monthInt}/${yearStr}</td></tr>`;
    } else {
      let rowsHtml = '';
      completedSessions.forEach((s, idx) => {
        rowsHtml += `
          <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
            <td class="py-2.5 px-3 font-semibold whitespace-nowrap">${formatDateVN(s.date)} (${getDayOfWeekVN(s.date)})</td>
            <td class="py-2.5 px-3 font-medium text-slate-800 dark:text-slate-200">${s.topic}</td>
            <td class="py-2.5 px-3">${s.homeworkTitle ? `${s.homeworkTitle} ${s.homeworkScore ? `(${s.homeworkScore})` : ''}` : '<span class="text-slate-400">Không</span>'}</td>
            <td class="py-2.5 px-3 text-slate-600 dark:text-slate-300">${s.notes || 'Tiếp thu tốt, làm bài đầy đủ.'}</td>
          </tr>
        `;
      });
      tbody.innerHTML = rowsHtml;
    }
  }

  // Generate formatted Raw Zalo text
  const rawMsgTextarea = document.getElementById('report-raw-message');
  if (rawMsgTextarea) {
    const isPublicWeb = window.location.protocol.startsWith('http') && !window.location.hostname.includes('localhost') && !window.location.hostname.startsWith('192.168.') && !window.location.hostname.startsWith('127.0.0.');
    const baseUrl = isPublicWeb ? window.location.href.split('?')[0] : ONLINE_PRODUCTION_URL;
    const parentUrl = `${baseUrl}?view=parent&class=${currentClass.id}&code=${AppState.settings.syncCode}`;

    let msg = `Kính gửi ${currentClass.parentName || 'Quý phụ huynh'},\n\n`;
    msg += `Em xin gửi bảng tổng kết học tập tháng ${monthInt}/${yearStr} của học sinh ${currentClass.student} (${currentClass.subject}):\n\n`;
    msg += `👉 Link xem trực tiếp Sổ liên lạc & Học phí:\n${parentUrl}\n\n`;
    msg += `📅 Tổng số buổi dạy trong tháng: ${completedSessions.length} buổi\n`;
    if (makeupSessions.length > 0) msg += `🔄 Trong đó có ${makeupSessions.length} buổi dạy bù\n`;
    msg += `💰 Đơn giá: ${formatVND(currentClass.feePerSession)}/buổi\n`;
    msg += `👉 Tổng học phí tháng ${monthInt}: ${formatVND(totalTuition)}\n\n`;

    if (AppState.settings && AppState.settings.bankAccount) {
      msg += `💳 Thông tin chuyển khoản học phí (quét VietQR tự động trong link trên):\n`;
      msg += `• Ngân hàng: ${AppState.settings.bankId || 'MB'}\n`;
      msg += `• Số TK: ${AppState.settings.bankAccount}\n`;
      msg += `• Chủ TK: ${AppState.settings.bankAccountName || ''}\n`;
      msg += `• Nội dung: ${currentClass.student.split(' ').pop()} Hoc phi T${monthInt}\n\n`;
    }

    msg += `📚 Chi tiết các buổi học trong tháng:\n`;
    completedSessions.forEach((s, i) => {
      msg += `${i + 1}. Ngày ${formatDateVN(s.date)}: ${s.topic}`;
      if (s.homeworkScore) msg += ` (BTVN: ${s.homeworkScore})`;
      msg += `\n`;
    });

    msg += `\n📝 Đánh giá chung: Học sinh có ý thức học bài nghiêm túc, hiểu bài và hoàn thành bài tập về nhà đầy đủ.\n`;
    msg += `Cảm ơn Anh/Chị và gia đình đã luôn đồng hành cùng em trong quá trình kèm cháu học ạ! 🙏`;

    rawMsgTextarea.value = msg;
  }
}

// Render Settings Tab (Tab 6)
function renderClassSettings() {
  const container = document.getElementById('class-settings-list');
  if (!container) return;

  let html = '';
  AppState.classes.forEach((c, idx) => {
    html += `
      <div class="bg-white dark:bg-[#111726] rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold flex items-center justify-center text-xs">0${idx + 1}</span>
            <div>
              <h4 class="text-sm font-bold text-slate-900 dark:text-white">${c.name}</h4>
              <span class="text-xs text-slate-500">${c.subject}</span>
            </div>
          </div>
          <button onclick="openEditClassModal('${c.id}')" class="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1 transition-colors">
            <i data-lucide="edit" class="w-3.5 h-3.5"></i>
            <span>Chỉnh Sửa</span>
          </button>
        </div>

        <div class="grid grid-cols-2 gap-2 text-xs">
          <div>
            <span class="text-slate-400 block">Học Sinh:</span>
            <span class="font-semibold text-slate-800 dark:text-slate-200">${c.student}</span>
          </div>
          <div>
            <span class="text-slate-400 block">Học Phí / Buổi:</span>
            <span class="font-bold text-slate-900 dark:text-slate-100">${formatVND(c.feePerSession)}</span>
          </div>
          <div>
            <span class="text-slate-400 block">Lịch Học Cố Định:</span>
            <span class="font-medium text-slate-700 dark:text-slate-300">${c.schedule || 'Chưa xếp'}</span>
          </div>
          <div>
            <span class="text-slate-400 block">Phụ Huynh & SĐT:</span>
            <span class="font-medium text-slate-700 dark:text-slate-300">${c.parentName || 'Chị Mai'} (${c.phone || '09xx'})</span>
          </div>
        </div>

        ${c.target ? `
          <div class="text-[11px] p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
            <strong>Mục tiêu:</strong> ${c.target}
          </div>
        ` : ''}
      </div>
    `;
  });

  container.innerHTML = html;

  // Populate Bank Settings in Tab 6
  const bankIdEl = document.getElementById('setting-bank-id');
  if (bankIdEl && AppState.settings && AppState.settings.bankId) bankIdEl.value = AppState.settings.bankId;
  const bankAccEl = document.getElementById('setting-bank-account');
  if (bankAccEl && AppState.settings) bankAccEl.value = AppState.settings.bankAccount || '';
  const bankNameEl = document.getElementById('setting-bank-name');
  if (bankNameEl && AppState.settings) bankNameEl.value = AppState.settings.bankAccountName || '';

  // Populate Cloud Sync Settings in Tab 6 & Modal
  const syncCode = (AppState.settings && AppState.settings.syncCode) ? AppState.settings.syncCode : DEFAULT_SYNC_ROOM;
  const syncCodeEl = document.getElementById('setting-sync-code');
  if (syncCodeEl) syncCodeEl.value = syncCode;
  const modalSyncCode = document.getElementById('modal-sync-code-input');
  if (modalSyncCode) modalSyncCode.value = syncCode;

  // Render Pairing QR Code
  const isPublicWeb = window.location.protocol.startsWith('http') && !window.location.hostname.includes('localhost') && !window.location.hostname.startsWith('192.168.') && !window.location.hostname.startsWith('127.0.0.');
  const baseUrl = isPublicWeb ? window.location.href.split('?')[0] : ONLINE_PRODUCTION_URL;
  const pairingUrl = `${baseUrl}?sync=${syncCode}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(pairingUrl)}`;

  const pairContainer = document.getElementById('setting-pairing-qr');
  if (pairContainer) {
    pairContainer.innerHTML = `<img src="${qrUrl}" alt="Pairing QR" class="w-full h-full object-contain rounded-lg">`;
  }
  const modalPairContainer = document.getElementById('modal-pairing-qr');
  if (modalPairContainer) {
    modalPairContainer.innerHTML = `<img src="${qrUrl}" alt="Pairing QR" class="w-full h-full object-contain rounded-lg">`;
  }

  lucide.createIcons({ root: container });
}

// Populate class select dropdowns in all modals
function populateClassSelects() {
  const selects = ['session-class-select', 'quick-class-select', 'report-class-select'];

  selects.forEach(selectId => {
    const el = document.getElementById(selectId);
    if (!el) return;

    const previousVal = el.value;
    let options = '';
    AppState.classes.forEach(c => {
      const selected = (previousVal ? previousVal === c.id : (AppState.currentClassId !== 'all' && AppState.currentClassId === c.id)) ? 'selected' : '';
      options += `<option value="${c.id}" ${selected}>${c.name} (${c.student})</option>`;
    });

    el.innerHTML = options;
  });

  // Dedicated for exam/resource dropdown: Shared for all classes is top choice!
  const examSelect = document.getElementById('exam-class-select');
  if (examSelect) {
    const previousVal = examSelect.value;
    const isAll = (!previousVal || previousVal === 'all');
    let examOptions = `<option value="all" ${isAll ? 'selected' : ''}>🌟 Dùng chung cho tất cả các lớp</option>`;
    AppState.classes.forEach(c => {
      const selected = (!isAll && previousVal === c.id) ? 'selected' : '';
      examOptions += `<option value="${c.id}" ${selected}>${c.name} (${c.student})</option>`;
    });
    examSelect.innerHTML = examOptions;
  }
}

// Master Render All Components
function renderAll() {
  renderClassTabs();
  renderMonthDisplay();
  renderStats();
  renderSessionsTable();
  renderCalendar();
  renderHomework();
  renderExams();
  renderParentReport();
  renderClassSettings();
  populateClassSelects();
}

// --- MODAL & ACTION HANDLERS ---

// Open Add Session Modal
function openAddSessionModal(prefillDate = null) {
  const modal = document.getElementById('modal-session');
  const form = document.getElementById('form-session');
  if (!modal || !form) return;

  form.reset();
  document.getElementById('session-id').value = '';
  document.getElementById('modal-session-title').textContent = 'Ghi Nhận Buổi Học Mới';

  // Set date
  const now = new Date();
  const dateStr = prefillDate || `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  document.getElementById('session-date').value = dateStr;
  document.getElementById('session-time').value = '19:30';
  document.getElementById('session-duration').value = '90';

  // Set class
  if (AppState.currentClassId !== 'all') {
    document.getElementById('session-class-select').value = AppState.currentClassId;
  }

  modal.classList.remove('hidden');
}

// Open Add Session for specific calendar date
function openAddSessionForDate(dateStr) {
  openAddSessionModal(dateStr);
}

// Edit Session
function editSession(id) {
  const sess = AppState.sessions.find(s => s.id === id);
  if (!sess) return;

  const modal = document.getElementById('modal-session');
  const form = document.getElementById('form-session');
  if (!modal || !form) return;

  document.getElementById('modal-session-title').textContent = 'Chỉnh Sửa Buổi Học';
  document.getElementById('session-id').value = sess.id;
  document.getElementById('session-class-select').value = sess.classId;
  document.getElementById('session-status-select').value = sess.status || 'completed';
  document.getElementById('session-date').value = sess.date;
  document.getElementById('session-time').value = sess.time || '19:30';
  document.getElementById('session-duration').value = sess.duration || 90;
  document.getElementById('session-topic').value = sess.topic || '';
  document.getElementById('session-details').value = sess.details || '';
  document.getElementById('session-hw-title').value = sess.homeworkTitle || '';
  document.getElementById('session-hw-deadline').value = sess.homeworkDeadline || '';
  document.getElementById('session-hw-status').value = sess.homeworkStatus || 'none';
  document.getElementById('session-hw-score').value = sess.homeworkScore || '';
  document.getElementById('session-rating').value = sess.rating || '4';
  document.getElementById('session-notes').value = sess.notes || '';

  modal.classList.remove('hidden');
}

// Delete Session
function deleteSession(id) {
  if (!confirm('Bạn có chắc chắn muốn xóa buổi học này khỏi danh sách?')) return;

  AppState.sessions = AppState.sessions.filter(s => s.id !== id);
  AppState.saveToStorage();
  renderAll();
  showToast('Đã xóa buổi học thành công', 'info');
}

// Open Quick Check-in Modal
function openQuickCheckinModal() {
  const modal = document.getElementById('modal-quick-checkin');
  const form = document.getElementById('form-quick-checkin');
  if (!modal || !form) return;

  form.reset();
  const now = new Date();
  const dateFormatted = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  document.getElementById('quick-checkin-date-label').textContent = `Hôm nay, ngày ${dateFormatted}`;

  if (AppState.currentClassId !== 'all') {
    document.getElementById('quick-class-select').value = AppState.currentClassId;
  }

  modal.classList.remove('hidden');
}

// Open Add Exam Modal
function openAddExamModal() {
  const modal = document.getElementById('modal-exam');
  const form = document.getElementById('form-exam');
  if (!modal || !form) return;

  form.reset();
  document.getElementById('exam-id').value = '';
  document.getElementById('modal-exam-title').textContent = 'Thêm Đề Thi / Tài Liệu Mới';

  const examSelect = document.getElementById('exam-class-select');
  if (examSelect) {
    examSelect.value = (AppState.currentClassId !== 'all') ? AppState.currentClassId : 'all';
  }

  modal.classList.remove('hidden');
}

// Edit Exam
function editExam(id) {
  const ex = AppState.exams.find(e => e.id === id);
  if (!ex) return;

  const modal = document.getElementById('modal-exam');
  if (!modal) return;

  document.getElementById('modal-exam-title').textContent = 'Chỉnh Sửa Đề Thi';
  document.getElementById('exam-id').value = ex.id;
  document.getElementById('exam-class-select').value = ex.classId || 'all';
  document.getElementById('exam-category-select').value = ex.category;
  document.getElementById('exam-name').value = ex.title;
  document.getElementById('exam-difficulty').value = ex.difficulty || 'Khá';
  document.getElementById('exam-duration').value = ex.durationMinutes || '';
  document.getElementById('exam-year').value = ex.year || '';
  document.getElementById('exam-url').value = ex.examUrl || '';
  document.getElementById('exam-solution-url').value = ex.solutionUrl || '';
  document.getElementById('exam-notes').value = ex.notes || '';

  modal.classList.remove('hidden');
}

// Delete Exam
function deleteExam(id) {
  if (!confirm('Bạn có chắc muốn xóa đề thi này khỏi kho tài liệu?')) return;

  AppState.exams = AppState.exams.filter(e => e.id !== id);
  AppState.saveToStorage();
  renderAll();
  showToast('Đã xóa đề thi khỏi kho tài liệu', 'info');
}

// Assign Exam as Homework
function assignExamAsHomework(examId) {
  const ex = AppState.exams.find(e => e.id === examId);
  if (!ex) return;

  openAddSessionModal();
  document.getElementById('session-class-select').value = ex.classId;
  document.getElementById('session-topic').value = `Luyện đề: ${ex.title}`;
  document.getElementById('session-hw-title').value = `Làm đề ${ex.title} (${ex.durationMinutes || '90 phút'})`;
  document.getElementById('session-hw-status').value = 'pending';
  showToast(`Đã lấy đề "${ex.title}" đưa vào buổi học! Hãy kiểm tra ngày giờ và bấm Lưu.`, 'info');
}

// Quick Update Homework Status / Score
function quickUpdateHomework(sessionId) {
  const sess = AppState.sessions.find(s => s.id === sessionId);
  if (!sess) return;

  const score = prompt(`Nhập điểm số cho bài tập:\n"${sess.homeworkTitle}"\n(Để trống nếu chưa chấm)`, sess.homeworkScore || '9.0/10');
  if (score !== null) {
    if (score.trim()) {
      sess.homeworkStatus = 'graded';
      sess.homeworkScore = score.trim();
    } else {
      sess.homeworkStatus = 'submitted';
      sess.homeworkScore = '';
    }
    AppState.saveToStorage();
    renderAll();
    showToast('Đã cập nhật bài tập thành công!', 'success');
  }
}

// Open Edit Class Modal
function openEditClassModal(classId) {
  const cl = AppState.getClassById(classId);
  if (!cl) return;

  const modal = document.getElementById('modal-class-edit');
  if (!modal) return;

  document.getElementById('edit-class-id').value = cl.id;
  document.getElementById('edit-class-name').value = cl.name;
  document.getElementById('edit-class-student').value = cl.student;
  document.getElementById('edit-class-subject').value = cl.subject;
  document.getElementById('edit-class-schedule').value = cl.schedule;
  document.getElementById('edit-class-fee').value = cl.feePerSession;
  document.getElementById('edit-class-parent').value = cl.parentName || '';
  document.getElementById('edit-class-phone').value = cl.phone || '';
  document.getElementById('edit-class-target').value = cl.target || '';

  modal.classList.remove('hidden');
}

// Copy Raw Zalo Message to Clipboard
function copyRawZaloText() {
  const textarea = document.getElementById('report-raw-message');
  if (!textarea) return;

  navigator.clipboard.writeText(textarea.value).then(() => {
    showToast('Đã sao chép tin nhắn tổng kết Zalo vào bộ nhớ tạm! Bạn chỉ cần dán (Ctrl+V) gửi cho phụ huynh.', 'success');
    triggerConfetti();
  }).catch(() => {
    textarea.select();
    document.execCommand('copy');
    showToast('Đã sao chép tin nhắn!', 'success');
  });
}

// --- EVENT LISTENERS INITIALIZATION ---
function setupEventListeners() {
  // Theme Toggle
  const btnToggleTheme = document.getElementById('btn-toggle-theme');
  if (btnToggleTheme) {
    btnToggleTheme.addEventListener('click', () => AppState.toggleTheme());
  }

  // Month Navigation
  document.getElementById('btn-prev-month')?.addEventListener('click', () => {
    const [y, m] = AppState.currentMonth.split('-').map(Number);
    const prevDate = new Date(y, m - 2, 1);
    AppState.currentMonth = `${prevDate.getFullYear()}-${String(prevDate.getMonth() + 1).padStart(2, '0')}`;
    renderAll();
  });

  document.getElementById('btn-next-month')?.addEventListener('click', () => {
    const [y, m] = AppState.currentMonth.split('-').map(Number);
    const nextDate = new Date(y, m, 1);
    AppState.currentMonth = `${nextDate.getFullYear()}-${String(nextDate.getMonth() + 1).padStart(2, '0')}`;
    renderAll();
  });

  document.getElementById('btn-current-month-label')?.addEventListener('click', () => {
    AppState.currentMonth = getCurrentMonthString();
    renderAll();
    showToast('Đã quay về tháng hiện tại!', 'info');
  });

  // Tab Navigation Switching
  const navTabs = document.querySelectorAll('.nav-tab');
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      AppState.activeTab = targetTab;

      // Update tab active classes
      navTabs.forEach(t => {
        t.classList.remove('active', 'bg-slate-900', 'text-white', 'dark:bg-slate-100', 'dark:text-slate-900', 'shadow-xs');
        t.classList.add('text-slate-600', 'hover:text-slate-900', 'dark:text-slate-400', 'dark:hover:text-white');
      });
      tab.classList.add('active', 'bg-slate-900', 'text-white', 'dark:bg-slate-100', 'dark:text-slate-900', 'shadow-xs');
      tab.classList.remove('text-slate-600', 'dark:text-slate-400');

      // Hide all panes & show target
      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.add('hidden'));
      const activePane = document.getElementById(`tab-content-${targetTab}`);
      if (activePane) activePane.classList.remove('hidden');

      // Adjust Contextual Action Buttons in Header
      const btnAddSession = document.getElementById('btn-add-session');
      const btnAddExam = document.getElementById('btn-add-exam');
      if (targetTab === 'exams') {
        btnAddSession?.classList.add('hidden');
        btnAddExam?.classList.remove('hidden');
      } else {
        btnAddSession?.classList.remove('hidden');
        btnAddExam?.classList.add('hidden');
      }

      // Re-render specific tab contents
      if (targetTab === 'calendar') renderCalendar();
      if (targetTab === 'report') renderParentReport();
      if (targetTab === 'homework') renderHomework();
      if (targetTab === 'exams') renderExams();
    });
  });

  // Modal Open Buttons
  document.getElementById('btn-add-session')?.addEventListener('click', () => openAddSessionModal());
  document.getElementById('btn-add-exam')?.addEventListener('click', () => openAddExamModal());
  document.getElementById('btn-quick-checkin')?.addEventListener('click', () => openQuickCheckinModal());
  document.getElementById('btn-mobile-guide')?.addEventListener('click', () => {
    document.getElementById('modal-mobile-guide')?.classList.remove('hidden');
  });

  // Modal Close Buttons
  document.querySelectorAll('.btn-close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fixed.inset-0.z-50').forEach(m => m.classList.add('hidden'));
    });
  });

  // Close modals on outside backdrop click
  document.querySelectorAll('.fixed.inset-0.z-50').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  });

  // Session Form Submit
  const formSession = document.getElementById('form-session');
  if (formSession) {
    formSession.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('session-id').value;
      const classId = document.getElementById('session-class-select').value;
      const status = document.getElementById('session-status-select').value;
      const date = document.getElementById('session-date').value;
      const time = document.getElementById('session-time').value;
      const duration = parseInt(document.getElementById('session-duration').value, 10) || 90;
      const topic = document.getElementById('session-topic').value.trim();
      const details = document.getElementById('session-details').value.trim();
      const homeworkTitle = document.getElementById('session-hw-title').value.trim();
      const homeworkDeadline = document.getElementById('session-hw-deadline').value;
      const homeworkStatus = document.getElementById('session-hw-status').value;
      const homeworkScore = document.getElementById('session-hw-score').value.trim();
      const rating = parseInt(document.getElementById('session-rating').value, 10) || 4;
      const notes = document.getElementById('session-notes').value.trim();

      const cl = AppState.getClassById(classId);
      const fee = cl ? cl.feePerSession : 250000;

      if (id) {
        // Update existing
        const index = AppState.sessions.findIndex(s => s.id === id);
        if (index !== -1) {
          AppState.sessions[index] = {
            ...AppState.sessions[index],
            classId, status, date, time, duration, topic, details,
            homeworkTitle, homeworkDeadline, homeworkStatus, homeworkScore,
            rating, notes, fee
          };
          showToast('Đã cập nhật buổi học thành công!', 'success');
        }
      } else {
        // Create new
        const newSession = {
          id: 'sess-' + Date.now(),
          classId, status, date, time, duration, topic, details,
          homeworkTitle, homeworkDeadline, homeworkStatus, homeworkScore,
          rating, notes, fee
        };
        AppState.sessions.unshift(newSession);
        showToast('Đã tích và lưu buổi học thành công! (+1 Buổi)', 'success');
        triggerConfetti();
      }

      AppState.saveToStorage();
      document.getElementById('modal-session').classList.add('hidden');
      renderAll();
    });
  }

  // Quick Check-in Form Submit
  const formQuick = document.getElementById('form-quick-checkin');
  if (formQuick) {
    formQuick.addEventListener('submit', (e) => {
      e.preventDefault();
      const classId = document.getElementById('quick-class-select').value;
      const topic = document.getElementById('quick-topic').value.trim();
      const hwTitle = document.getElementById('quick-hw').value.trim();

      const now = new Date();
      const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      const cl = AppState.getClassById(classId);

      const newSession = {
        id: 'sess-' + Date.now(),
        classId,
        date: dateStr,
        time: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`,
        duration: 90,
        status: 'completed',
        topic: topic,
        details: 'Điểm danh nhanh hôm nay.',
        homeworkTitle: hwTitle || '',
        homeworkDeadline: '',
        homeworkStatus: hwTitle ? 'pending' : 'none',
        homeworkScore: '',
        rating: 5,
        notes: 'Tiếp thu tốt.',
        fee: cl ? cl.feePerSession : 250000
      };

      AppState.sessions.unshift(newSession);
      AppState.saveToStorage();
      document.getElementById('modal-quick-checkin').classList.add('hidden');
      renderAll();
      showToast(`⚡ Đã tích buổi hôm nay cho ${cl ? cl.name : 'lớp'}!`, 'success');
      triggerConfetti();
    });
  }

  // Exam Form Submit
  const formExam = document.getElementById('form-exam');
  if (formExam) {
    formExam.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('exam-id').value;
      const classId = document.getElementById('exam-class-select').value;
      const category = document.getElementById('exam-category-select').value;
      const title = document.getElementById('exam-name').value.trim();
      const difficulty = document.getElementById('exam-difficulty').value;
      const durationMinutes = document.getElementById('exam-duration').value.trim();
      const year = document.getElementById('exam-year').value.trim();
      const examUrl = document.getElementById('exam-url').value.trim();
      const solutionUrl = document.getElementById('exam-solution-url').value.trim();
      const notes = document.getElementById('exam-notes').value.trim();

      if (id) {
        const index = AppState.exams.findIndex(ex => ex.id === id);
        if (index !== -1) {
          AppState.exams[index] = {
            ...AppState.exams[index],
            classId, category, title, difficulty, durationMinutes, year, examUrl, solutionUrl, notes
          };
          showToast('Đã cập nhật đề thi thành công!', 'success');
        }
      } else {
        const newExam = {
          id: 'exam-' + Date.now(),
          classId, category, title, difficulty, durationMinutes, year, examUrl, solutionUrl, notes,
          tags: [category, difficulty]
        };
        AppState.exams.unshift(newExam);
        showToast('Đã thêm đề mới vào kho đề của lớp!', 'success');
      }

      AppState.saveToStorage();
      document.getElementById('modal-exam').classList.add('hidden');
      renderAll();
    });
  }

  // Class Edit Form Submit
  const formClassEdit = document.getElementById('form-class-edit');
  if (formClassEdit) {
    formClassEdit.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('edit-class-id').value;
      const name = document.getElementById('edit-class-name').value.trim();
      const student = document.getElementById('edit-class-student').value.trim();
      const subject = document.getElementById('edit-class-subject').value.trim();
      const schedule = document.getElementById('edit-class-schedule').value.trim();
      const feePerSession = parseInt(document.getElementById('edit-class-fee').value, 10) || 250000;
      const parentName = document.getElementById('edit-class-parent').value.trim();
      const phone = document.getElementById('edit-class-phone').value.trim();
      const target = document.getElementById('edit-class-target').value.trim();

      const index = AppState.classes.findIndex(c => c.id === id);
      if (index !== -1) {
        AppState.classes[index] = {
          ...AppState.classes[index],
          name, student, subject, schedule, feePerSession, parentName, phone, target
        };
        AppState.saveToStorage();
        showToast(`Đã lưu thông tin lớp "${name}"!`, 'success');
        document.getElementById('modal-class-edit').classList.add('hidden');
        renderAll();
      }
    });
  }

  // Search & Filter Listeners for Sessions
  document.getElementById('session-search-input')?.addEventListener('input', (e) => {
    AppState.searchSessionQuery = e.target.value;
    renderSessionsTable();
  });

  document.getElementById('session-status-filter')?.addEventListener('change', (e) => {
    AppState.sessionFilterStatus = e.target.value;
    renderSessionsTable();
  });

  // Homework Filter Listener
  document.getElementById('homework-status-filter')?.addEventListener('change', (e) => {
    AppState.homeworkFilterStatus = e.target.value;
    renderHomework();
  });

  // Exam Search & Category Listeners
  document.getElementById('exam-search-input')?.addEventListener('input', (e) => {
    AppState.searchExamQuery = e.target.value;
    renderExams();
  });

  document.querySelectorAll('#exam-category-filters button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#exam-category-filters button').forEach(b => {
        b.classList.remove('bg-slate-900', 'text-white', 'dark:bg-slate-100', 'dark:text-slate-900');
        b.classList.add('text-slate-600', 'dark:text-slate-400');
      });
      btn.classList.add('bg-slate-900', 'text-white', 'dark:bg-slate-100', 'dark:text-slate-900');
      btn.classList.remove('text-slate-600', 'dark:text-slate-400');

      AppState.examCategoryFilter = btn.getAttribute('data-category');
      renderExams();
    });
  });

  // Export Sessions to CSV (Excel compatible)
  document.getElementById('btn-export-sessions')?.addEventListener('click', () => {
    const sessions = AppState.getCurrentFilteredSessions();
    if (sessions.length === 0) {
      showToast('Không có buổi học nào để xuất!', 'warning');
      return;
    }

    let csvContent = '\uFEFF'; // UTF-8 BOM for Excel Vietnamese accents
    csvContent += 'STT,Lớp Học,Học Sinh,Môn Học,Ngày Dạy,Thứ,Giờ Dạy,Thời Lượng (Phút),Chuyên Đề / Bài Học,Chi Tiết Giảng Dạy,Bài Tập Về Nhà,Điểm BTVN,Đánh Giá,Ghi Chú,Trạng Thái,Học Phí (VNĐ)\n';

    sessions.forEach((s, idx) => {
      const cl = AppState.getClassById(s.classId) || {};
      const statusVN = s.status === 'completed' ? 'Đã dạy' : s.status === 'makeup' ? 'Buổi bù' : s.status === 'upcoming' ? 'Sắp tới' : 'Nghỉ';
      const row = [
        idx + 1,
        `"${(cl.name || '').replace(/"/g, '""')}"`,
        `"${(cl.student || '').replace(/"/g, '""')}"`,
        `"${(cl.subject || '').replace(/"/g, '""')}"`,
        s.date,
        getDayOfWeekVN(s.date),
        s.time || '',
        s.duration || 90,
        `"${(s.topic || '').replace(/"/g, '""')}"`,
        `"${(s.details || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
        `"${(s.homeworkTitle || '').replace(/"/g, '""')}"`,
        `"${(s.homeworkScore || '').replace(/"/g, '""')}"`,
        s.rating ? `${s.rating} sao` : '',
        `"${(s.notes || '').replace(/"/g, '""')}"`,
        statusVN,
        s.fee || cl.feePerSession || 0
      ];
      csvContent += row.join(',') + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Danh_Sach_Buoi_Day_${AppState.currentMonth}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('Đã xuất file Excel / CSV danh sách buổi học thành công!', 'success');
  });

  // Parent Report Copy, Print & Class Select
  document.getElementById('report-class-select')?.addEventListener('change', () => renderParentReport());
  document.getElementById('btn-copy-parent-message')?.addEventListener('click', copyRawZaloText);
  document.getElementById('btn-print-parent-report')?.addEventListener('click', () => window.print());

  // Backup & Restore Actions
  document.getElementById('btn-export-backup')?.addEventListener('click', () => {
    const backupData = {
      exportDate: new Date().toISOString(),
      version: '1.0',
      classes: AppState.classes,
      sessions: AppState.sessions,
      exams: AppState.exams
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tutortrack_backup_${AppState.currentMonth}_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Đã xuất file sao lưu JSON an toàn về máy tính!', 'success');
  });

  document.getElementById('file-import-backup')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.classes && data.sessions) {
          AppState.classes = data.classes;
          AppState.sessions = data.sessions;
          AppState.exams = data.exams || [];
          AppState.saveToStorage();
          renderAll();
          showToast('Phục hồi dữ liệu từ file JSON thành công!', 'success');
        } else {
          showToast('File JSON không hợp lệ hoặc thiếu dữ liệu!', 'error');
        }
      } catch (err) {
        showToast('Lỗi khi đọc file JSON: ' + err.message, 'error');
      }
    };
    reader.readAsText(file);
  });

  document.getElementById('btn-load-sample-data')?.addEventListener('click', () => {
    if (confirm('Nạp lại dữ liệu mẫu 4 lớp chuẩn? Dữ liệu hiện tại sẽ được thay bằng dữ liệu mẫu.')) {
      AppState.classes = DEFAULT_CLASSES;
      AppState.sessions = generateDefaultSessions();
      AppState.exams = generateDefaultExams();
      AppState.saveToStorage();
      renderAll();
      showToast('Đã nạp dữ liệu mẫu phong phú cho 4 lớp!', 'success');
      triggerConfetti();
    }
  });

  document.getElementById('btn-reset-all')?.addEventListener('click', () => {
    if (confirm('CẢNH BÁO: Bạn có chắc chắn muốn xóa toàn bộ buổi dạy và kho đề không? Hành động này không thể hoàn tác.')) {
      AppState.sessions = [];
      AppState.exams = [];
      AppState.saveToStorage();
      renderAll();
      showToast('Đã xóa dữ liệu buổi học & kho đề.', 'info');
    }
  });

  // --- REALTIME CLOUD SYNC & PARENT PORTAL LISTENERS ---
  
  // Header Buttons
  document.getElementById('btn-share-parent-top')?.addEventListener('click', () => openShareParentModal());
  document.getElementById('btn-cloud-sync')?.addEventListener('click', () => openCloudSyncModal());

  // Share Parent Modal Actions
  document.getElementById('btn-copy-parent-link')?.addEventListener('click', () => {
    const input = document.getElementById('share-parent-link-input');
    if (input) {
      input.select();
      navigator.clipboard.writeText(input.value);
      showToast('Đã sao chép đường link phụ huynh vào bộ nhớ tạm!', 'success');
    }
  });

  document.getElementById('btn-copy-share-zalo-msg')?.addEventListener('click', () => {
    const textarea = document.getElementById('share-zalo-msg-preview');
    if (textarea) {
      textarea.select();
      navigator.clipboard.writeText(textarea.value);
      showToast('Đã sao chép tin nhắn Zalo kèm link thành công!', 'success');
      triggerConfetti();
    }
  });

  // Bank & VietQR Settings Save
  document.getElementById('btn-save-bank-settings')?.addEventListener('click', () => {
    const bankId = document.getElementById('setting-bank-id')?.value || 'MB';
    const bankAcc = (document.getElementById('setting-bank-account')?.value || '').trim();
    const bankName = (document.getElementById('setting-bank-name')?.value || '').trim().toUpperCase();

    AppState.settings.bankId = bankId;
    AppState.settings.bankAccount = bankAcc;
    AppState.settings.bankAccountName = bankName;
    AppState.saveToStorage();
    renderAll();
    showToast('Đã lưu cấu hình tài khoản ngân hàng & VietQR thành công!', 'success');
  });

  // Sync Code Copy & Change
  const copySyncCodeFn = () => {
    const code = AppState.settings.syncCode;
    navigator.clipboard.writeText(code);
    showToast(`Đã sao chép Mã Phòng: ${code}`, 'success');
  };
  document.getElementById('btn-copy-sync-code')?.addEventListener('click', copySyncCodeFn);
  document.getElementById('btn-modal-copy-sync-code')?.addEventListener('click', copySyncCodeFn);

  const changeSyncCodeFn = () => {
    const currentCode = AppState.settings.syncCode;
    const newCode = prompt('Nhập Mã Phòng Đồng Bộ mới (hoặc bấm OK để tạo ngẫu nhiên):', currentCode);
    if (newCode !== null) {
      const trimmed = newCode.trim() || ('giasu-' + Math.random().toString(36).substring(2, 8));
      AppState.settings.syncCode = trimmed;
      AppState.saveToStorage();
      CloudSync.connectMQTT();
      renderAll();
      showToast(`Đã đổi sang phòng đồng bộ: ${trimmed}`, 'success');
    }
  };
  document.getElementById('btn-change-sync-code')?.addEventListener('click', changeSyncCodeFn);
  document.getElementById('btn-modal-change-sync-code')?.addEventListener('click', changeSyncCodeFn);

  // Manual Sync Push / Pull
  const syncPushFn = () => {
    CloudSync.pushUpdate();
    showToast('Đang đồng bộ dữ liệu tức thì lên Cloud...', 'info');
  };
  document.getElementById('btn-sync-push-now')?.addEventListener('click', syncPushFn);
  document.getElementById('btn-modal-sync-push')?.addEventListener('click', syncPushFn);

  const syncPullFn = () => {
    CloudSync.pullFromLan();
    showToast('Đang kiểm tra và tải bản cập nhật mới nhất...', 'info');
  };
  document.getElementById('btn-sync-pull-now')?.addEventListener('click', syncPullFn);
  document.getElementById('btn-modal-sync-pull')?.addEventListener('click', syncPullFn);

  // Parent Portal Admin Unlock
  document.getElementById('btn-unlock-admin')?.addEventListener('click', () => {
    const modal = document.getElementById('modal-admin-pin');
    const input = document.getElementById('admin-pin-input');
    const err = document.getElementById('admin-pin-error');
    if (modal) {
      if (input) input.value = '';
      if (err) err.classList.add('hidden');
      modal.classList.remove('hidden');
      input?.focus();
    }
  });

  document.getElementById('btn-submit-admin-pin')?.addEventListener('click', () => {
    const input = document.getElementById('admin-pin-input');
    const err = document.getElementById('admin-pin-error');
    const enteredPin = input ? input.value.trim() : '';
    const correctPin = (AppState.settings && AppState.settings.adminPin) ? AppState.settings.adminPin : '1234';

    if (enteredPin === correctPin) {
      document.getElementById('modal-admin-pin')?.classList.add('hidden');
      // Remove ?view=parent from URL
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
      checkParentPortalMode();
      renderAll();
      showToast('Đã mở khóa toàn quyền Quản trị Gia Sư!', 'success');
    } else {
      if (err) err.classList.remove('hidden');
    }
  });

  // Parent Portal Month Navigation
  document.getElementById('parent-btn-prev-month')?.addEventListener('click', () => {
    const [y, m] = AppState.currentMonth.split('-');
    let year = parseInt(y, 10);
    let month = parseInt(m, 10) - 1;
    if (month < 1) { month = 12; year -= 1; }
    AppState.currentMonth = `${year}-${String(month).padStart(2, '0')}`;
    renderParentPortal(currentParentClassId);
  });

  document.getElementById('parent-btn-next-month')?.addEventListener('click', () => {
    const [y, m] = AppState.currentMonth.split('-');
    let year = parseInt(y, 10);
    let month = parseInt(m, 10) + 1;
    if (month > 12) { month = 1; year += 1; }
    AppState.currentMonth = `${year}-${String(month).padStart(2, '0')}`;
    renderParentPortal(currentParentClassId);
  });
}

// --- VIETQR & HELPER FUNCTIONS ---
function getVietQRUrl(bankId, accountNo, accountName, amount, content) {
  if (!bankId || !accountNo) return null;
  const cleanAcc = encodeURIComponent(accountNo.trim());
  const cleanName = encodeURIComponent(accountName ? accountName.trim().toUpperCase() : '');
  const cleanContent = encodeURIComponent(content || 'Hoc phi');
  return `https://img.vietqr.io/image/${bankId}-${cleanAcc}-compact2.png?amount=${amount}&addInfo=${cleanContent}&accountName=${cleanName}`;
}

// --- REAL-TIME MULTI-DEVICE CLOUD SYNC ENGINE ---
const CloudSync = {
  deviceId: 'dev_' + Math.random().toString(36).substring(2, 9),
  mqttClient: null,
  status: 'connecting', // 'live', 'lan', 'syncing', 'offline'
  lastSyncTimestamp: 0,
  debounceTimer: null,
  broadcastChannel: null,

  init() {
    // Setup BroadcastChannel for cross-tab sync on same machine
    try {
      if (typeof BroadcastChannel !== 'undefined') {
        this.broadcastChannel = new BroadcastChannel('tutorhub_tab_sync');
        this.broadcastChannel.onmessage = (event) => {
          if (event.data && event.data.type === 'TAB_SYNC') {
            AppState.importAllData(event.data.payload, true);
          }
        };
      }
    } catch (e) {
      console.warn('BroadcastChannel not supported:', e);
    }

    // Connect to MQTT WebSocket broker for real-time cloud sync
    this.connectMQTT();

    // Start LAN server sync polling if served via HTTP
    if (window.location.protocol.startsWith('http')) {
      this.startLanSync();
    }
  },

  connectMQTT() {
    if (typeof mqtt === 'undefined') {
      console.warn('MQTT library not loaded. Running in local mode.');
      this.updateStatus('offline');
      return;
    }

    // If client already exists, disconnect first
    if (this.mqttClient) {
      try { this.mqttClient.end(); } catch (e) {}
    }

    const roomCode = (AppState.settings && AppState.settings.syncCode) ? AppState.settings.syncCode : DEFAULT_SYNC_ROOM;
    const topic = `tutorhub/sync/${roomCode}`;
    const clientId = 'th_' + this.deviceId;

    try {
      // Connect to HiveMQ public secure WebSocket broker
      this.mqttClient = mqtt.connect('wss://broker.hivemq.com:8884/mqtt', {
        clientId: clientId,
        clean: true,
        connectTimeout: 8000,
        reconnectPeriod: 5000
      });

      this.mqttClient.on('connect', () => {
        this.updateStatus('live');
        this.mqttClient.subscribe(topic, { qos: 1 }, (err) => {
          if (err) console.error('Subscription error:', err);
        });

        // If tutor mode (not parent portal), immediately push current state with retain flag so cloud always holds latest
        if (!isParentPortalMode() && AppState.sessions && AppState.sessions.length > 0) {
          const now = Date.now();
          this.lastSyncTimestamp = now;
          const data = AppState.exportAllData();
          const isMob = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
          const msg = {
            type: 'SYNC_UPDATE',
            deviceId: this.deviceId,
            deviceName: isMob ? 'Điện thoại' : 'Máy tính',
            timestamp: now,
            data: data
          };
          this.mqttClient.publish(topic, JSON.stringify(msg), { qos: 1, retain: true });
        }
      });

      this.mqttClient.on('message', (receivedTopic, messageBuffer) => {
        try {
          const payload = JSON.parse(messageBuffer.toString());
          if (payload.deviceId === this.deviceId) return; // Ignore own message

          if (payload.type === 'SYNC_UPDATE' && payload.timestamp) {
            // Guard: Reject incoming dummy sample data
            const isDummy = payload.data && payload.data.classes && payload.data.classes.some(c => c.student === 'Nguyễn Hoàng Nam' || c.name.includes('Lớp 12A'));
            if (isDummy) {
              console.warn('Rejected incoming dummy sample data from cloud.');
              // Overwrite broker retained message with user real data
              setTimeout(() => this.pushUpdate(), 500);
              return;
            }

            if (payload.timestamp > this.lastSyncTimestamp || isParentPortalMode()) {
              this.lastSyncTimestamp = payload.timestamp;
              AppState.importAllData(payload.data, true);
              if (isParentPortalMode()) {
                renderParentPortal(currentParentClassId);
                showToast('⚡ Giáo viên vừa cập nhật thông tin học tập!', 'info');
              } else {
                const devName = payload.deviceName || 'thiết bị khác';
                showToast(`⚡ Đã đồng bộ dữ liệu mới nhất từ ${devName}!`, 'info');
              }
            }
          }
        } catch (err) {
          console.error('Error parsing sync message:', err);
        }
      });

      this.mqttClient.on('error', (err) => {
        console.warn('MQTT connection error, fallback to LAN/Offline:', err);
        if (window.location.protocol.startsWith('http')) {
          this.updateStatus('lan');
        } else {
          this.updateStatus('offline');
        }
      });

      this.mqttClient.on('offline', () => {
        if (window.location.protocol.startsWith('http')) {
          this.updateStatus('lan');
        } else {
          this.updateStatus('offline');
        }
      });
    } catch (e) {
      console.error('MQTT initialization error:', e);
      this.updateStatus('offline');
    }
  },

  pushUpdate() {
    this.updateStatus('syncing');
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      const now = Date.now();
      this.lastSyncTimestamp = now;
      const data = AppState.exportAllData();
      const isMob = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
      const msg = {
        type: 'SYNC_UPDATE',
        deviceId: this.deviceId,
        deviceName: isMob ? 'Điện thoại' : 'Máy tính',
        timestamp: now,
        data: data
      };

      // 1. Send via MQTT WebSocket with RETAIN: true
      if (this.mqttClient && this.mqttClient.connected) {
        const roomCode = AppState.settings.syncCode || DEFAULT_SYNC_ROOM;
        const topic = `tutorhub/sync/${roomCode}`;
        this.mqttClient.publish(topic, JSON.stringify(msg), { qos: 1, retain: true });
        this.updateStatus('live');
      }

      // 2. Send via BroadcastChannel for other tabs
      if (this.broadcastChannel) {
        this.broadcastChannel.postMessage({ type: 'TAB_SYNC', payload: data });
      }

      // 3. Send to LAN HTTP server if available
      if (window.location.protocol.startsWith('http')) {
        fetch('/api/sync', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then(res => {
          if (res.ok && (!this.mqttClient || !this.mqttClient.connected)) {
            this.updateStatus('lan');
          }
        }).catch(() => {});
      }
    }, 350);
  },

  startLanSync() {
    // Initial fetch from LAN server
    this.pullFromLan();
    // Poll LAN server every 4 seconds
    setInterval(() => {
      if (document.visibilityState === 'visible') {
        this.pullFromLan();
      }
    }, 4000);
  },

  pullFromLan() {
    fetch('/api/sync')
      .then(res => res.json())
      .then(data => {
        if (data && data.timestamp && data.timestamp > this.lastSyncTimestamp) {
          this.lastSyncTimestamp = data.timestamp;
          AppState.importAllData(data, true);
        }
      })
      .catch(() => {});
  },

  updateStatus(status) {
    this.status = status;
    const dot = document.getElementById('sync-status-dot');
    const text = document.getElementById('sync-status-text');
    const badgeLabel = document.getElementById('setting-sync-status-label');
    const modalBadgeText = document.getElementById('modal-sync-status-text');

    if (status === 'live') {
      if (dot) dot.className = 'w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse';
      if (text) text.textContent = 'Đồng Bộ Cloud';
      if (badgeLabel) badgeLabel.textContent = 'Trực Tuyến (Cloud Live)';
      if (modalBadgeText) modalBadgeText.textContent = 'Đang Kết Nối Trực Tiếp';
    } else if (status === 'syncing') {
      if (dot) dot.className = 'w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping';
      if (text) text.textContent = 'Đang Lưu...';
      if (badgeLabel) badgeLabel.textContent = 'Đang Đồng Bộ...';
      if (modalBadgeText) modalBadgeText.textContent = 'Đang Đồng Bộ...';
    } else if (status === 'lan') {
      if (dot) dot.className = 'w-2.5 h-2.5 rounded-full bg-sky-500';
      if (text) text.textContent = 'Mạng LAN';
      if (badgeLabel) badgeLabel.textContent = 'Mạng Cục Bộ (LAN)';
      if (modalBadgeText) modalBadgeText.textContent = 'Đồng Bộ Mạng LAN Máy Tính';
    } else {
      if (dot) dot.className = 'w-2.5 h-2.5 rounded-full bg-slate-400';
      if (text) text.textContent = 'Cục Bộ (Offline)';
      if (badgeLabel) badgeLabel.textContent = 'Lưu Trực Tiếp Trên Máy';
      if (modalBadgeText) modalBadgeText.textContent = 'Chế Độ Cục Bộ (LocalStorage)';
    }
  }
};

// --- PARENT PORTAL CONTROLLER ---
let currentParentClassId = 'class-1';

function isParentPortalMode() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('view') === 'parent';
}

function checkParentPortalMode() {
  const urlParams = new URLSearchParams(window.location.search);
  const isParent = urlParams.get('view') === 'parent';
  const classParam = urlParams.get('class');
  const codeParam = urlParams.get('code') || urlParams.get('sync');

  if (codeParam && AppState.settings) {
    if (AppState.settings.syncCode !== codeParam) {
      AppState.settings.syncCode = codeParam;
      AppState.saveToStorage(true);
    }
  }

  if (isParent) {
    currentParentClassId = classParam || (AppState.classes[0] ? AppState.classes[0].id : 'class-1');
    document.getElementById('tutor-admin-view')?.classList.add('hidden');
    document.getElementById('parent-portal-view')?.classList.remove('hidden');
    document.getElementById('class-tabs-container')?.parentElement?.classList.add('hidden');
    document.getElementById('btn-quick-checkin')?.classList.add('hidden');
    document.getElementById('btn-mobile-guide')?.classList.add('hidden');
    document.getElementById('btn-share-parent-top')?.classList.add('hidden');
    renderParentPortal(currentParentClassId);
  } else {
    document.getElementById('tutor-admin-view')?.classList.remove('hidden');
    document.getElementById('parent-portal-view')?.classList.add('hidden');
    document.getElementById('class-tabs-container')?.parentElement?.classList.remove('hidden');
    document.getElementById('btn-quick-checkin')?.classList.remove('hidden');
    document.getElementById('btn-mobile-guide')?.classList.remove('hidden');
    document.getElementById('btn-share-parent-top')?.classList.remove('hidden');
  }
}

function renderParentPortal(classId) {
  const cl = AppState.getClassById(classId) || AppState.classes[0];
  if (!cl) return;

  const [yearStr, monthStr] = AppState.currentMonth.split('-');
  const monthInt = parseInt(monthStr, 10);

  // Student Meta
  const nameEl = document.getElementById('parent-view-student-name');
  if (nameEl) nameEl.textContent = `Em ${cl.student}`;

  const metaEl = document.getElementById('parent-view-class-meta');
  if (metaEl) metaEl.textContent = `${cl.name} • ${cl.subject} • Gia sư phụ trách`;

  const targetEl = document.getElementById('parent-view-target');
  if (targetEl) targetEl.textContent = `Mục tiêu: ${cl.target || 'Đạt điểm cao trong các kỳ thi'}`;

  const monthEl = document.getElementById('parent-view-month-display');
  if (monthEl) monthEl.textContent = `Tháng ${monthInt}/${yearStr}`;

  // Filter sessions for this class and current month
  const sessions = AppState.sessions.filter(s => {
    return s.classId === cl.id && s.date.substring(0, 7) === AppState.currentMonth;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  const completedSessions = sessions.filter(s => s.status === 'completed' || s.status === 'makeup');
  const makeupSessions = sessions.filter(s => s.status === 'makeup');
  const cancelledSessions = sessions.filter(s => s.status === 'cancelled');

  // Stats
  const statSess = document.getElementById('parent-stat-sessions');
  if (statSess) statSess.textContent = `${completedSessions.length} buổi`;

  const statMakeup = document.getElementById('parent-stat-makeup');
  if (statMakeup) statMakeup.textContent = `${makeupSessions.length} buổi bù • ${cancelledSessions.length} nghỉ`;

  // Homework
  const hwSessions = completedSessions.filter(s => s.homeworkTitle);
  const submittedHw = completedSessions.filter(s => s.homeworkStatus === 'graded' || s.homeworkStatus === 'submitted');
  const gradedHw = completedSessions.filter(s => s.homeworkStatus === 'graded' && s.homeworkScore);

  let avgScore = 0;
  if (gradedHw.length > 0) {
    const sum = gradedHw.reduce((acc, s) => {
      const num = parseFloat(s.homeworkScore);
      return isNaN(num) ? acc : acc + num;
    }, 0);
    avgScore = (sum / gradedHw.length).toFixed(1);
  }

  const statHw = document.getElementById('parent-stat-homework');
  if (statHw) {
    statHw.textContent = hwSessions.length > 0 ? `${Math.round((submittedHw.length / hwSessions.length) * 100)}%` : '100%';
  }

  const statHwScore = document.getElementById('parent-stat-hw-score');
  if (statHwScore) {
    statHwScore.textContent = gradedHw.length > 0 ? `Điểm TB BTVN: ${avgScore}/10` : 'Đầy đủ bài tập';
  }

  // Tuition calculation
  const feeRate = cl.feePerSession || 250000;
  const totalTuition = completedSessions.length * feeRate;

  const statFeeRate = document.getElementById('parent-stat-fee-rate');
  if (statFeeRate) statFeeRate.textContent = formatVND(feeRate);

  const statTotalTuition = document.getElementById('parent-stat-total-tuition');
  if (statTotalTuition) statTotalTuition.textContent = formatVND(totalTuition);

  // Tuition payment status
  const tuitionKey = `${cl.id}-${AppState.currentMonth}`;
  const isPaid = AppState.settings && AppState.settings.tuitionStatus && AppState.settings.tuitionStatus[tuitionKey] === 'paid';

  const statTuitionStatus = document.getElementById('parent-stat-tuition-status');
  if (statTuitionStatus) {
    if (isPaid) {
      statTuitionStatus.textContent = '✓ Đã hoàn tất học phí';
      statTuitionStatus.className = 'text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-1';
    } else {
      statTuitionStatus.textContent = 'Chờ phụ huynh thanh toán';
      statTuitionStatus.className = 'text-xs font-bold text-amber-600 dark:text-amber-400 mt-1';
    }
  }

  // Render VietQR Payment Section
  const vietQrSection = document.getElementById('parent-vietqr-section');
  if (vietQrSection) {
    if (isPaid) {
      vietQrSection.innerHTML = `
        <div class="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200">
          <i data-lucide="check-circle" class="w-6 h-6 text-emerald-500 shrink-0"></i>
          <div>
            <div class="font-bold text-sm">Học Phí Tháng ${monthInt}/${yearStr} Đã Được Thanh Toán Đầy Đủ</div>
            <p class="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">Gia sư xin gửi lời cảm ơn chân thành đến Quý phụ huynh và gia đình!</p>
          </div>
        </div>
      `;
    } else if (totalTuition > 0 && AppState.settings && AppState.settings.bankAccount) {
      const bank = AppState.settings.bankId || 'MB';
      const acc = AppState.settings.bankAccount;
      const accName = AppState.settings.bankAccountName || 'GIA SU';
      const content = `${cl.student.split(' ').pop()} Hoc phi T${monthInt}`;
      const qrUrl = getVietQRUrl(bank, acc, accName, totalTuition, content);

      vietQrSection.innerHTML = `
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-3 flex-1">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-bold">
              <i data-lucide="credit-card" class="w-3.5 h-3.5"></i>
              <span>Thanh Toán Học Phí Nhanh Qua Mã VietQR</span>
            </div>
            <h3 class="text-base font-bold text-slate-900 dark:text-white">
              Học Phí Tháng ${monthInt}/${yearStr}: <span class="text-indigo-600 dark:text-indigo-400">${formatVND(totalTuition)}</span>
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Quý phụ huynh mở bất kỳ ứng dụng ngân hàng nào (Vietcombank, MB, Techcombank, MoMo, BIDV...) quét mã QR bên cạnh để chuyển khoản tự động chính xác 100%.
            </p>
            <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5 font-mono">
              <div class="flex items-center justify-between">
                <span class="text-slate-500">Ngân hàng:</span>
                <span class="font-bold text-slate-800 dark:text-slate-200">${bank}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-slate-500">Số tài khoản:</span>
                <span class="font-bold text-indigo-600 dark:text-indigo-400 text-sm">${acc}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-slate-500">Chủ tài khoản:</span>
                <span class="font-bold text-slate-800 dark:text-slate-200">${accName}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-slate-500">Nội dung CK:</span>
                <span class="font-bold text-emerald-600 dark:text-emerald-400">${content}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center gap-2 shrink-0">
            <div class="p-2 bg-white rounded-2xl shadow-md border border-slate-200 dark:border-slate-700">
              <img src="${qrUrl}" alt="VietQR" class="w-48 h-48 sm:w-52 sm:h-52 rounded-xl object-contain">
            </div>
            <span class="text-[11px] text-slate-500">Quét mã bằng mọi App Ngân hàng</span>
          </div>
        </div>
      `;
    } else {
      vietQrSection.innerHTML = `
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between">
          <div>
            <strong>Thông Tin Học Phí Tháng:</strong> ${completedSessions.length} buổi x ${formatVND(feeRate)} = <span class="font-bold text-indigo-600 dark:text-indigo-400">${formatVND(totalTuition)}</span>
          </div>
          <span class="text-slate-400">(Gia sư có thể cập nhật tài khoản ngân hàng trong phần Cài Đặt)</span>
        </div>
      `;
    }
  }

  // Session History List
  const sessListEl = document.getElementById('parent-sessions-list');
  const sessCountTag = document.getElementById('parent-session-count-tag');
  if (sessCountTag) sessCountTag.textContent = `${completedSessions.length} buổi đã học`;

  if (sessListEl) {
    if (completedSessions.length === 0) {
      sessListEl.innerHTML = `
        <div class="py-8 text-center text-slate-400 text-xs">
          Chưa có buổi học nào được ghi nhận trong tháng ${monthInt}/${yearStr}.
        </div>
      `;
    } else {
      let html = '';
      completedSessions.forEach((s, idx) => {
        const isMakeup = s.status === 'makeup';
        html += `
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-lg text-xs font-bold ${isMakeup ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300' : 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'}">
                  ${isMakeup ? 'Buổi Học Bù' : `Buổi ${completedSessions.length - idx}`}
                </span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200">
                  ${formatDateVN(s.date)} (${getDayOfWeekVN(s.date)}) • ${s.time || '19:30'} (${s.duration || 90} phút)
                </span>
              </div>
              ${s.homeworkScore ? `
                <span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 self-start sm:self-auto">
                  <i data-lucide="check" class="w-3 h-3"></i>
                  <span>BTVN: ${s.homeworkScore}/10</span>
                </span>
              ` : ''}
            </div>

            <div class="text-sm font-bold text-slate-900 dark:text-white pt-1">
              ${s.topic}
            </div>

            ${s.details ? `
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line pl-2 border-l-2 border-indigo-400">
                ${s.details}
              </p>
            ` : ''}

            ${s.homeworkTitle ? `
              <div class="text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                <span>📚 <strong>Bài tập:</strong> ${s.homeworkTitle}</span>
                <span class="font-medium text-slate-700 dark:text-slate-300">
                  ${s.homeworkStatus === 'graded' ? '✓ Đã chấm' : s.homeworkStatus === 'submitted' ? 'Đã nộp bài' : 'Đang làm'}
                </span>
              </div>
            ` : ''}

            ${s.notes ? `
              <div class="text-xs text-slate-600 dark:text-slate-300 italic pt-1">
                💬 <strong>Nhận xét của gia sư:</strong> ${s.notes}
              </div>
            ` : ''}
          </div>
        `;
      });
      sessListEl.innerHTML = html;
    }
  }

  // Exams & Study Documents for Parent
  const examListEl = document.getElementById('parent-exams-list');
  const countTag = document.getElementById('parent-exams-count-tag');
  if (examListEl) {
    // Show exams for this specific class OR shared across all classes ('all' or empty)
    const classExams = AppState.exams.filter(e => !e.classId || e.classId === 'all' || e.classId === cl.id);
    if (countTag) countTag.textContent = `${classExams.length} tài liệu & đề thi`;

    if (classExams.length === 0) {
      examListEl.innerHTML = `
        <div class="py-8 text-center text-slate-400 dark:text-slate-500 text-xs">
          <i data-lucide="folder-x" class="w-8 h-8 mx-auto mb-2 opacity-40"></i>
          <div>Chưa có tài liệu hoặc đề thi nào được chia sẻ.</div>
        </div>
      `;
    } else {
      let examHtml = '';
      classExams.forEach(e => {
        const isExam = (e.category && (e.category.includes('Đề thi') || e.category.includes('Kiểm tra')));
        const iconName = isExam ? 'file-text' : 'book-open';
        const iconBg = isExam ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400' : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400';

        let tagsHtml = '';
        if (e.tags && e.tags.length > 0) {
          tagsHtml = e.tags.map(t => `<span class="px-2 py-0.5 rounded-md text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">#${t}</span>`).join(' ');
        }

        const openDocUrl = e.examUrl || e.driveUrl || '';
        const solutionDocUrl = e.solutionUrl || '';

        examHtml += `
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div class="flex items-start gap-3">
                <span class="w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center font-bold shrink-0 mt-0.5">
                  <i data-lucide="${iconName}" class="w-4 h-4"></i>
                </span>
                <div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white leading-snug">${e.title}</h4>
                  <div class="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                    <span class="font-medium bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">${e.category || 'Tài liệu'}</span>
                    ${e.difficulty ? `<span class="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-[11px] font-semibold">${e.difficulty}</span>` : ''}
                    ${e.durationMinutes ? `<span>⏱ ${e.durationMinutes}</span>` : ''}
                    <span class="text-indigo-600 dark:text-indigo-400 font-medium">🌟 Dùng chung</span>
                  </div>
                </div>
              </div>

              <!-- Action buttons for parent/student -->
              <div class="flex flex-wrap items-center gap-2 shrink-0 pt-2 sm:pt-0">
                ${openDocUrl ? `
                  <a href="${openDocUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors">
                    <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                    <span>Mở Xem Tài Liệu</span>
                  </a>
                ` : ''}
                ${solutionDocUrl ? `
                  <a href="${solutionDocUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors">
                    <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
                    <span>Xem Đáp Án</span>
                  </a>
                ` : ''}
              </div>
            </div>

            ${e.notes ? `<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-white/60 dark:bg-slate-900/40 p-2.5 rounded-lg border border-slate-200/50 dark:border-slate-800">${e.notes}</p>` : ''}

            ${tagsHtml ? `<div class="flex flex-wrap gap-1">${tagsHtml}</div>` : ''}
          </div>
        `;
      });
      examListEl.innerHTML = examHtml;
    }
  }

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// --- SHARE MODAL HANDLERS ---
function openShareParentModal(preferredClassId = null) {
  const modal = document.getElementById('modal-share-parent');
  const select = document.getElementById('share-modal-class-select');
  if (!modal || !select) return;

  // Populate classes
  select.innerHTML = '';
  AppState.classes.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = `${c.name} (${c.student})`;
    select.appendChild(opt);
  });

  const selectedClassId = preferredClassId || (AppState.currentClassId !== 'all' ? AppState.currentClassId : AppState.classes[0].id);
  select.value = selectedClassId;

  updateShareModalContent(selectedClassId);

  select.onchange = () => {
    updateShareModalContent(select.value);
  };

  modal.classList.remove('hidden');
}

function updateShareModalContent(classId) {
  const cl = AppState.getClassById(classId) || AppState.classes[0];
  if (!cl) return;

  const [yearStr, monthStr] = AppState.currentMonth.split('-');
  const monthInt = parseInt(monthStr, 10);

  // Generate URL - Always use online production link so parents can open immediately on mobile
  const isPublicWeb = window.location.protocol.startsWith('http') && !window.location.hostname.includes('localhost') && !window.location.hostname.startsWith('192.168.') && !window.location.hostname.startsWith('127.0.0.');
  const baseUrl = isPublicWeb ? window.location.href.split('?')[0] : ONLINE_PRODUCTION_URL;
  const syncCode = (AppState.settings && AppState.settings.syncCode) ? AppState.settings.syncCode : DEFAULT_SYNC_ROOM;
  const parentUrl = `${baseUrl}?view=parent&class=${cl.id}&code=${syncCode}`;

  const linkInput = document.getElementById('share-parent-link-input');
  if (linkInput) linkInput.value = parentUrl;

  const previewLink = document.getElementById('share-parent-link-preview');
  if (previewLink) previewLink.href = parentUrl;

  // Generate QR code
  const qrContainer = document.getElementById('share-parent-qr-img');
  if (qrContainer) {
    const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(parentUrl)}`;
    qrContainer.innerHTML = `<img src="${qrSrc}" alt="Parent QR" class="w-full h-full object-contain rounded-lg">`;
  }

  // Calculate monthly stats
  const sessions = AppState.sessions.filter(s => s.classId === cl.id && s.date.substring(0, 7) === AppState.currentMonth);
  const completedSessions = sessions.filter(s => s.status === 'completed' || s.status === 'makeup');
  const totalTuition = completedSessions.length * (cl.feePerSession || 250000);

  // Pre-fill friendly Zalo message
  const msgTextarea = document.getElementById('share-zalo-msg-preview');
  if (msgTextarea) {
    let msg = `Kính gửi ${cl.parentName || 'Quý phụ huynh'} em ${cl.student},\n\n`;
    msg += `Em là gia sư phụ trách môn ${cl.subject} của em ${cl.student}. Em xin gửi Sổ theo dõi học tập & Báo cáo học phí trực tuyến tháng ${monthInt}/${yearStr} để Quý phụ huynh tiện theo dõi tiến độ học của con:\n\n`;
    msg += `👉 Link xem trực tiếp Sổ liên lạc:\n${parentUrl}\n\n`;
    msg += `📊 Tóm tắt tháng ${monthInt}/${yearStr}:\n`;
    msg += `• Số buổi đã dạy: ${completedSessions.length} buổi\n`;
    msg += `• Đơn giá: ${formatVND(cl.feePerSession)} / buổi\n`;
    msg += `• Tổng học phí tháng: ${formatVND(totalTuition)}\n\n`;
    if (AppState.settings && AppState.settings.bankAccount) {
      msg += `💳 Thông tin thanh toán (quét mã VietQR tiện lợi trong link trên):\n`;
      msg += `• Ngân hàng: ${AppState.settings.bankId || 'MB'}\n`;
      msg += `• Số tài khoản: ${AppState.settings.bankAccount}\n`;
      msg += `• Chủ tài khoản: ${AppState.settings.bankAccountName || ''}\n`;
      msg += `• Nội dung: ${cl.student.split(' ').pop()} Hoc phi T${monthInt}\n\n`;
    }
    msg += `Em cảm ơn Anh/Chị và gia đình đã luôn tin tưởng và đồng hành cùng em ạ! 🙏`;
    msgTextarea.value = msg;
  }
}

function openCloudSyncModal() {
  const modal = document.getElementById('modal-cloud-sync');
  if (!modal) return;
  const isPublicWeb = window.location.protocol.startsWith('http') && !window.location.hostname.includes('localhost') && !window.location.hostname.startsWith('192.168.') && !window.location.hostname.startsWith('127.0.0.');
  const baseUrl = isPublicWeb ? window.location.href.split('?')[0] : ONLINE_PRODUCTION_URL;
  const syncCode = (AppState.settings && AppState.settings.syncCode) ? AppState.settings.syncCode : DEFAULT_SYNC_ROOM;
  const input = document.getElementById('modal-sync-code-input');
  if (input) input.value = syncCode;

  // Render QR
  const pairingUrl = `${baseUrl}?sync=${syncCode}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(pairingUrl)}`;
  const container = document.getElementById('modal-pairing-qr');
  if (container) {
    container.innerHTML = `<img src="${qrUrl}" alt="Pairing QR" class="w-full h-full object-contain rounded-lg">`;
  }

  modal.classList.remove('hidden');
}

// Window Onload Bootstrap
window.addEventListener('DOMContentLoaded', () => {
  AppState.init();
  CloudSync.init();
  renderAll();
  checkParentPortalMode();
  setupEventListeners();
});

// Explicitly bind handlers to window for inline onclick attributes
window.openAddSessionModal = openAddSessionModal;
window.openQuickCheckinModal = openQuickCheckinModal;
window.openAddExamModal = openAddExamModal;
window.editSession = editSession;
window.deleteSession = deleteSession;
window.openAddSessionForDate = openAddSessionForDate;
window.quickUpdateHomework = quickUpdateHomework;
window.assignExamAsHomework = assignExamAsHomework;
window.editExam = editExam;
window.deleteExam = deleteExam;
window.openEditClassModal = openEditClassModal;
window.copyRawZaloText = copyRawZaloText;
window.openShareParentModal = openShareParentModal;
window.openCloudSyncModal = openCloudSyncModal;
window.renderParentPortal = renderParentPortal;
window.checkParentPortalMode = checkParentPortalMode;

