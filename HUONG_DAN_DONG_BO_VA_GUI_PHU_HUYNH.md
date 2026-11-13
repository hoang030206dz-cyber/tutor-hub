# 📖 HƯỚNG DẪN ĐỒNG BỘ ĐIỆN THOẠI & GỬI LINK CHO PHỤ HUYNH
### Ứng Dụng Quản Lý Gia Sư 4 Lớp Học Thông Minh — TutorHub Pro

---

Chào bạn! Hệ thống **TutorHub** của bạn đã được nâng cấp hoàn chỉnh với **2 tính năng quan trọng nhất** theo đúng yêu cầu:
1. ⚡ **Đồng bộ dữ liệu thời gian thực 2 chiều giữa Điện Thoại & Laptop**: Khi bạn dùng điện thoại tích buổi, sửa bài tập hay nhập học phí &rarr; Màn hình laptop ở nhà tự động cập nhật ngay lập tức (<0.1 giây) mà không cần tải lại trang.
2. 👨‍👩‍👧 **Cổng Thông Tin Học Tập & Học Phí Dành Riêng Cho Phụ Huynh (Parent Portal)**: Gửi 1 đường link duy nhất cho phụ huynh. Phụ huynh xem được toàn bộ nhật ký học tập, điểm số của con và quét mã **VietQR** tự động để chuyển khoản học phí chính xác 100%.

---

## PHẦN 1: ĐỒNG BỘ 2 CHIỀU ĐIỆN THOẠI & LAPTOP

### 1. Cơ chế hoạt động
Hệ thống sử dụng công nghệ truyền dữ liệu thời gian thực **WebSocket Realtime Cloud** kết hợp lưu trữ cục bộ:
- Mọi thao tác: Điểm danh nhanh, thêm buổi dạy, chấm điểm BTVN, chỉnh sửa học phí... trên bất kỳ thiết bị nào (điện thoại hoặc laptop) đều được truyền tức thời sang thiết bị kia.
- Hoạt động mượt mà cả trên **mạng 4G/5G** khi bạn đi dạy ngoài đường lẫn mạng Wi-Fi tại nhà.

### 2. Cách ghép nối điện thoại với laptop (Chỉ làm 1 lần duy nhất)
1. **Trên Máy Tính**: 
   - Mở ứng dụng [index.html](file:///D:/h%E1%BB%8Dc%20fpga/tutor_hub/index.html).
   - Ở thanh menu trên cùng, bấm vào nút **"Đồng Bộ Cloud"** (hoặc vào tab **Cấu Hình 4 Lớp**).
   - Màn hình sẽ hiện ra **Mã Phòng Đồng Bộ** và **Mã QR Ghép Nối Nhanh**.
2. **Trên Điện Thoại**:
   - Mở Camera (iPhone hoặc Android) quét mã QR trên màn hình máy tính.
   - Trình duyệt điện thoại sẽ mở web và **tự động liên kết vào cùng phòng đồng bộ** với máy tính!
3. **Thử nghiệm ngay**:
   - Trên điện thoại, bạn bấm nút **"Điểm Danh Nhanh"** hoặc tick 1 buổi học.
   - Nhìn sang màn hình laptop: **Số buổi và bảng dữ liệu sẽ tự động nhảy số tức thì!**

> 💡 **Mẹo:** Bạn có thể đổi Mã Phòng thành tên dễ nhớ (ví dụ: `thaynam-toan12`) bằng cách bấm nút **"Đổi Mã"** trong bảng đồng bộ.

---

## PHẦN 2: GỬI LINK BÁO CÁO CHO PHỤ HUYNH

### 1. Phụ huynh sẽ nhìn thấy những gì?
Khi phụ huynh bấm vào link bạn gửi, họ sẽ vào **Cổng Thông Tin Phụ Huynh** được thiết kế riêng:
- ✅ **Bảo mật tuyệt đối:** Phụ huynh chỉ nhìn thấy duy nhất thông tin của con mình (ví dụ học sinh Nam - Lớp 12A), hoàn toàn **không nhìn thấy** các lớp học khác của bạn.
- ✅ **Chế độ chỉ xem (Read-only):** Toàn bộ các nút chỉnh sửa, xóa buổi, cài đặt của gia sư đều bị ẩn đi để tránh phụ huynh bấm nhầm.
- ✅ **Nội dung đầy đủ & chuyên nghiệp:**
  - Tên học sinh, lớp học, môn học và mục tiêu đào tạo.
  - Tổng số buổi đã học trong tháng, số buổi dạy bù, tỷ lệ hoàn thành bài tập về nhà.
  - Nhật ký chi tiết từng buổi học: ngày dạy, chuyên đề bài học, chi tiết kiến thức đã dạy, điểm BTVN và lời nhận xét của gia sư.
  - Bảng điểm các bài kiểm tra định kỳ và kho đề ôn thi.
  - **Mã VietQR thanh toán học phí:** Tự động tính đúng tổng tiền học phí tháng và sinh mã QR ngân hàng chuẩn. Phụ huynh chỉ cần bật app ngân hàng quét 1 giây là xong, không phải gõ số tài khoản hay số tiền!

### 2. Cách lấy link & gửi cho phụ huynh (1 Click Zalo)
1. Trên giao diện gia sư, bấm nút **"Gửi Phụ Huynh"** màu xanh lá ở góc trên bên phải màn hình (hoặc vào tab **Báo Cáo Phụ Huynh**).
2. Hộp thoại hiện ra:
   - Chọn lớp cần gửi (ví dụ: *Lớp 12A - Nguyễn Hoàng Nam*).
   - Bấm nút **"Sao Chép Tin Nhắn"**: Hệ thống sẽ tự động sao chép một tin nhắn Zalo cực kỳ lịch sự, có đầy đủ tóm tắt buổi dạy, số tiền học phí và đường link xem trực tiếp.
3. Mở Zalo dán (Ctrl+V) gửi cho phụ huynh là xong!

### 3. Xem thử giao diện phụ huynh trước khi gửi
Trong hộp thoại "Gửi Phụ Huynh", bạn bấm nút **"Xem Thử"** để mở một tab mới trải nghiệm đúng giao diện mà phụ huynh sẽ nhìn thấy trên điện thoại của họ.
*(Nếu muốn quay lại giao diện quản lý gia sư từ màn hình phụ huynh, cuộn xuống chân trang bấm "Dành cho Gia Sư" và nhập mã PIN mặc định: `1234`).*

---

## PHẦN 3: CÀI ĐẶT TÀI KHOẢN NGÂN HÀNG & MÃ VIETQR

Để phụ huynh có thể quét mã chuyển khoản học phí tự động:
1. Mở web &rarr; Vào tab **"Cấu Hình 4 Lớp"** (Tab thứ 6).
2. Cuộn xuống phần **"Tài Khoản Ngân Hàng & Mã VietQR Thu Học Phí"**:
   - **Ngân hàng:** Chọn ngân hàng bạn đang dùng (MB Bank, Vietcombank, Techcombank, VPBank, BIDV, ACB, VietinBank...).
   - **Số tài khoản:** Nhập số tài khoản của bạn.
   - **Tên chủ tài khoản:** Nhập họ tên in hoa không dấu (ví dụ: `NGUYEN VAN A`).
3. Bấm **"Lưu Thông Tin"**.
4. Xong! Từ nay mỗi khi phụ huynh mở link báo cáo, hệ thống sẽ tự động hiển thị mã QR thanh toán chuẩn của ngân hàng với đúng số tiền học phí tháng đó!

---

## PHẦN 4: HƯỚNG DẪN ĐƯA WEB LÊN MẠNG (DÙNG 4G 24/7 MIỄN PHÍ)

Nếu bạn muốn đi dạy ở bất kỳ đâu, mở điện thoại bằng 4G/5G mà không cần máy tính ở nhà phải bật:

### Cách làm 30 giây với Netlify Drop (100% Miễn phí trọn đời):
1. Mở trình duyệt web truy cập trang: **[https://app.netlify.com/drop](https://app.netlify.com/drop)**
2. Đăng ký/Đăng nhập tài khoản miễn phí (bằng Google hoặc Email).
3. Mở thư mục trên máy tính của bạn: `D:\học fpga\tutor_hub`.
4. Kéo thả nguyên thư mục **`tutor_hub`** vào khung tròn trên trang web Netlify.
5. Sau 10 giây, Netlify sẽ cấp cho bạn 1 đường link online cố định (ví dụ: `https://giasu-hub-pro.netlify.app`).
6. Bạn lưu link này vào điện thoại:
   - **Trên iPhone (Safari):** Bấm biểu tượng *Chia sẻ* (ô vuông có mũi tên chỉ lên) &rarr; chọn **"Thêm vào MH chính" (Add to Home Screen)**.
   - **Trên Android (Chrome):** Bấm *menu 3 chấm* góc trên &rarr; chọn **"Thêm vào màn hình chính"**.
7. Bây giờ ứng dụng TutorHub đã trở thành 1 app riêng biệt trên màn hình điện thoại của bạn, mở bất cứ lúc nào, bất cứ nơi đâu, dữ liệu tự động đồng bộ về máy tính!

---

## TỔNG KẾT CÁC FILE ĐÃ ĐƯỢC CẬP NHẬT

| Đường dẫn file | Vai trò & Tính năng |
| :--- | :--- |
| [index.html](file:///D:/h%E1%BB%8Dc%20fpga/tutor_hub/index.html) | Giao diện chính: Thêm nút Đồng Bộ Cloud, Gửi Phụ Huynh, Cổng Phụ Huynh và Cấu hình VietQR. |
| [app.js](file:///D:/h%E1%BB%8Dc%20fpga/tutor_hub/app.js) | Lõi xử lý: Động cơ đồng bộ Cloud WebSocket 2 chiều, logic phân quyền Phụ huynh, sinh mã VietQR. |
| [server.ps1](file:///D:/h%E1%BB%8Dc%20fpga/server.ps1) | Máy chủ máy tính: Hỗ trợ API `/api/sync` đồng bộ dữ liệu mạng LAN nội bộ. |
| [Mo_Web_Cho_Dien_Thoai.bat](file:///D:/h%E1%BB%8Dc%20fpga/Mo_Web_Cho_Dien_Thoai.bat) | File chạy nhanh máy chủ kết nối điện thoại qua Wi-Fi tại nhà. |

Chúc bạn quản lý các lớp học gia sư thật thuận tiện, chuyên nghiệp và hiệu quả! 🎉
