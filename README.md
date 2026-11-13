# 🎓 TutorHub Pro - Hệ Thống Quản Lý Gia Sư 4 Lớp Học Chuyên Nghiệp

Một ứng dụng Web Frontend hiện đại, thẩm mỹ chuẩn quốc tế dành riêng cho gia sư quản lý cùng lúc **4 lớp học** độc lập với đầy đủ nghiệp vụ giảng dạy:

1. **⚡ Tích số buổi dạy trong tháng**: Đếm số buổi hoàn thành, tính học phí tự động, lịch dạy trực quan.
2. **📖 Ghi chép nội dung buổi dạy**: Lưu tên chuyên đề, tóm tắt lý thuyết, dạng bài tập đã luyện, đánh giá 1-5 sao và thái độ học tập.
3. **📝 Quản lý bài tập về nhà (BTVN)**: Theo dõi trạng thái nộp bài (Chờ nộp, Đã nộp, Đã chấm), ghi nhận điểm số và hạn nộp.
4. **📂 Kho lưu trữ đề thi & tài liệu từng lớp**: Phân loại đề thi thử, kiểm tra 15p/1 tiết, đề thi học kỳ, chuyên đề điểm 9+, tài liệu công thức, link Google Drive/PDF, đáp án chi tiết và 1-click giao đề thành BTVN.
5. **📑 Báo cáo phụ huynh siêu tiện lợi**: 1-click sao chép mẫu tin nhắn Zalo tổng kết tháng cực kỳ lịch sự, hoặc in phiếu báo cáo học tập chuẩn khổ A4.
6. **⚙️ Tùy biến thông tin 4 lớp**: Thay đổi tên lớp, học sinh, môn học, lịch cố định, mức học phí và sao lưu/phục hồi file JSON.

---

## 🚀 Cách Mở Ứng Dụng

- **Cách 1**: Nhấp đúp vào file `Mo_Web_Gia_Su.bat` ở thư mục gốc `d:\học fpga\`.
- **Cách 2**: Nhấp đúp trực tiếp vào file `tutor_hub\index.html` để mở trong trình duyệt Chrome, Edge, Cốc Cốc, Firefox,... (hoạt động offline/online 100%, không cần cài Node.js hay web server phức tạp).

---

## 💡 Hướng Dẫn Sử Dụng Nhanh

### 1. Chuyển Đổi Giữa 4 Lớp Học
- Trên thanh chọn lớp (Class Bar) trên đầu trang:
  - Chọn từng lớp: Xem riêng dữ liệu, số buổi, học phí và kho đề của lớp đó.
  - Chọn **"Tất Cả 4 Lớp (Tổng quan)"**: Xem toàn cảnh số buổi dạy của cả 4 lớp trong tháng và tổng thu nhập gia sư.

### 2. Tích Điểm Danh Buổi Học
- **Điểm danh nhanh hôm nay**: Bấm nút màu xanh lá **"Điểm Danh Nhanh"** ở góc phải thanh tiêu đề. Chọn lớp, nhập tên bài và bấm Lưu.
- **Thêm buổi chi tiết**: Bấm **"+ Thêm Buổi Học"**, chọn ngày, giờ, chuyên đề, bài tập về nhà và đánh giá sao.

### 3. Xem & Chấm Bài Tập Về Nhà
- Chọn tab **"Bài Tập Về Nhà"**.
- Bấm **"Cập nhật nộp / Chấm điểm"** để nhập điểm số (vd: `9.0/10`) và lời nhận xét.

### 4. Quản Lý Kho Đề Thi & Tài Liệu
- Chọn tab **"Kho Đề Thi Của Lớp"**.
- Bấm **"+ Thêm Đề Mới"** để lưu link Google Drive, OneDrive hoặc tài liệu PDF kèm mức độ khó (Cơ bản, Khá, Vận dụng cao).
- Bấm biểu tượng máy bay giấy để lấy đề đó giao ngay thành bài tập về nhà cho lớp!

### 5. Báo Cáo Cuối Tháng Gửi Phụ Huynh
- Chọn lớp cần báo cáo, sau đó chọn tab **"Báo Cáo Phụ Huynh"**.
- Ứng dụng đã tự động soạn sẵn tin nhắn tổng kết gồm: Số buổi dạy, số tiền học phí, danh sách từng buổi và nhận xét.
- Bấm nút xanh lá **"Sao Chép Tin Nhắn Zalo"** và chỉ cần dán (Ctrl+V) gửi cho phụ huynh.
- Bấm **"In Phiếu"** để in ra giấy hoặc lưu thành file PDF gửi phụ huynh.

---

## 🔒 An Toàn & Bảo Mật Dữ Liệu
- Dữ liệu được lưu trữ tự động trên máy tính của bạn thông qua `LocalStorage`.
- Ở tab **"Cấu Hình 4 Lớp"**, bạn có thể bấm **"Xuất Dữ Liệu (Backup JSON)"** bất kỳ lúc nào để lưu trữ dự phòng ra ổ cứng hoặc sao chép sang máy tính khác.
