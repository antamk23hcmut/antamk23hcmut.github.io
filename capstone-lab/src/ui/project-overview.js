function projectOverview() {
  return `
    <section class="project-overview project-intro" aria-labelledby="project-title">
      <div>
        <h2 id="project-title">Chế tạo và mô phỏng hoạt động của cảm biến áp suất mềm chứa kim loại lỏng dưới tải nén cục bộ</h2>
        <p class="project-lead">Khi một đầu nén ép lên cảm biến, vi kênh bên trong silicone biến dạng và làm thay đổi điện trở của đường dẫn kim loại lỏng. Đồ án chế tạo mẫu, đo sự thay đổi này theo lực nén và dùng mô phỏng để giải thích vai trò của tiết diện kênh.</p>
        <p>CAPSTONE LAB lưu thiết kế mẫu, số đo thực nghiệm và kết quả COMSOL ở cùng một nơi để theo dõi tiến độ và đối chiếu kết quả theo từng cấu hình.</p>
        <a class="project-progress-link" href="#project-progress">Xem tiến độ theo cấu hình</a>
      </div>
      <figure class="project-figure">
        <a href="assets/local-indentation.webp">
          <img src="assets/local-indentation.webp" width="1440" height="919" alt="Hình chiếu đứng và hình chiếu bằng của mẫu silicone, với đầu nén tác dụng xuống ngay phía trên đường tâm vi kênh." />
        </a>
        <figcaption>Sơ đồ đặt tải của đồ án. Đầu nén tròn Ø5 mm tác dụng theo chiều −z. Cấu hình đo danh nghĩa đặt đầu nén giữa mẫu, tại <var>x</var><sub>p</sub> = 25 mm và <var>y</var><sub>p</sub> = 5 mm.</figcaption>
      </figure>
    </section>

    <section class="project-overview" aria-labelledby="project-method">
      <h2 id="project-method">Từ chế tạo mẫu đến đối chiếu kết quả</h2>
      <ol class="project-method">
        <li>
          <h3>Chế tạo</h3>
          <p>Thiết kế và in 3D khuôn, tạo hai lớp silicone, liên kết chúng để tạo vi kênh, sau đó điền kim loại lỏng và làm kín. Ma trận DOE theo dõi 7 cấu hình hình học, mỗi cấu hình gồm 3 mẫu độc lập.</p>
        </li>
        <li>
          <h3>Thực nghiệm</h3>
          <p>TN0 đo điện trở ổn định khi không tải. TN1 dùng các chu kỳ nén–nhả hoàn toàn để xác định dải đo và kiểm tra khả năng phục hồi. TN2 đo đường đặc tính ở cả nhánh nén và nhánh nhả trên dải tải chung.</p>
        </li>
        <li>
          <h3>Mô phỏng COMSOL</h3>
          <p>Mô hình kết cấu M1 mô tả silicone siêu đàn hồi dưới chuyển vị đầu nén, với kênh rỗng trong bài toán cơ học. Hình học sau biến dạng được dùng để suy ra điện trở của đường dẫn điền đầy, rồi đối chiếu xu hướng đáp ứng với thực nghiệm. Ba cấp lưới M01–M03 dùng để kiểm tra độ hội tụ. Trong bảng COMSOL, <var>s</var> là tham số tăng tải từng bước của bộ giải.</p>
        </li>
      </ol>
      <figure class="project-figure project-geometry">
        <a href="assets/sensor-geometry.webp">
          <img src="assets/sensor-geometry.webp" width="1440" height="317" loading="lazy" alt="Bản vẽ mặt cắt ngang và dọc của cấu hình tham chiếu. Mẫu dài 50 mm, rộng 10 mm, dày 0,7 mm. Kênh vuông cạnh 0,2 mm nằm giữa lớp trên dày 0,2 mm và lớp dưới dày 0,3 mm." />
        </a>
        <figcaption>Cấu hình tham chiếu trong bản thuyết minh. Mục Thiết kế &amp; DOE trình bày kích thước của từng cấu hình khảo sát.</figcaption>
      </figure>
    </section>

    <section class="project-overview" aria-labelledby="project-quantities">
      <h2 id="project-quantities">Các đại lượng cần biết</h2>
      <p>Trong mô phỏng, đầu nén đi xuống một đoạn <var>δ</var>, tạo phản lực <var>F</var> và làm thay đổi tiết diện <var>S</var>(<var>x</var>) dọc vi kênh. Theo định luật Pouillet, với điện trở suất <var>ρ</var> không đổi, đoạn kênh có tiết diện nhỏ đóng góp nhiều điện trở hơn trên cùng một chiều dài. Tích phân được lấy trên toàn bộ chiều dài dẫn điện <var>L</var><sub>c</sub>.</p>
      <p class="project-equation" data-math291="text"><var>R</var><sub>FEM</sub> = <var>ρ</var> ∫₀<sup><var>L</var><sub>c</sub></sup> d<var>x</var> / <var>S</var>(<var>x</var>)</p>
      <dl class="project-quantities" data-math291="text">
        <div><dt><var>F</var> (N) · Lực nén</dt><dd>Lực đọc trên đồng hồ khi thử mẫu. Trong COMSOL, lực được lấy từ phản lực của đầu nén.</dd></div>
        <div><dt><var>δ</var> (mm) · Độ lún</dt><dd>Độ dịch chuyển xuống của đầu nén kể từ khi bắt đầu tiếp xúc với mẫu.</dd></div>
        <div><dt><var>S</var>(<var>x</var>), <var>S</var><sub>center</sub> (mm²) · Tiết diện</dt><dd>Diện tích lòng kênh tại vị trí <var>x</var> dọc kênh. <var>S</var><sub>center</sub> là diện tích tại tâm vùng nén.</dd></div>
        <div><dt><var>R</var>, <var>R</var><sub>0</sub> (Ω) · Điện trở</dt><dd><var>R</var> là điện trở đọc tại mức tải đang xét. <var>R</var><sub>0</sub> là điện trở ổn định khi không tải, đo ở TN0.</dd></div>
        <div><dt><var>r</var> (%) · Tín hiệu tương đối TN2</dt><dd>Phần trăm biến thiên điện trở so với TN0, tính bằng 100 × (<var>R</var> − <var>R</var><sub>0</sub>) / <var>R</var><sub>0</sub>.</dd></div>
        <div><dt><var>ρ</var> (Ω·m) · Điện trở suất</dt><dd>Đại lượng của vật liệu dẫn điện. Trang Phân tích ước lượng từ TN0 theo hình học và có hệ số chặn cho điện trở ký sinh.</dd></div>
      </dl>
      <p data-math291="text"><strong>Cách đọc đường đặc tính.</strong> Trong TN1, biến thiên điện trở của từng chu kỳ lấy mốc trước chu kỳ. Dải đo là khoảng lực đã xác nhận cho tín hiệu nhận biết được và đáp ứng các tiêu chí thử. Độ nhạy cho biết tín hiệu đổi bao nhiêu khi lực tăng 1 N. Độ trễ được đánh giá từ chênh lệch giữa hai nhánh nén và nhả tại cùng lực.</p>
    </section>

    <section class="project-overview project-sources" aria-labelledby="project-sources-title">
      <h2 id="project-sources-title">Tài liệu tham khảo</h2>
      <ul>
        <li><a href="https://doi.org/10.1088/0960-1317/20/12/125029">Park và cộng sự (2010)</a> — Nguyên lý cảm biến điện trở dùng vi kênh kim loại lỏng trong nền đàn hồi.</li>
        <li><a href="https://doi.org/10.3390/mi12030319">Scott và Ali (2021)</a> — Tổng quan phương pháp chế tạo thiết bị vi lưu, dùng để đặt phương án làm khuôn của đồ án trong bối cảnh các kỹ thuật hiện có.</li>
        <li><a href="https://doi.org/10.1007/s10544-005-6070-2">Mata và cộng sự (2005)</a> và <a href="https://doi.org/10.1016/j.prostr.2022.01.099">Sales và cộng sự (2022)</a> — Tài liệu đối chiếu về ảnh hưởng của công thức pha lên tính chất PDMS.</li>
      </ul>
    </section>
  `;
}
