import { NextPage } from "next";
import dynamic from "next/dynamic";

const WithNavbar = dynamic(() => import("@/layouts/WithNavbar"), {
  ssr: false,
});

interface Props {}

const Privacy: NextPage<Props> = () => {
  return (
    <WithNavbar>
      <div className="mx-auto w-full max-w-[73rem] flex-col gap-3 p-5 md:flex-row md:p-10">
        <div className="flex flex-col">
          <div className="prose-dark">
            <p>
              <strong>นโยบายความเป็นส่วนตัวสำหรับลูกค้า</strong>
            </p>
            <p>
              กลุ่มกิจกรรมเทคโนโลยี&nbsp;มหาวิทยาลัยเกษตรศาสตร์&nbsp;ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ&nbsp;โดยนโยบายความเป็นส่วนตัวฉบับนี้ได้อธิบายแนวปฏิบัติเกี่ยวกับการเก็บรวบรวม&nbsp;ใช้&nbsp;หรือเปิดเผยข้อมูลส่วนบุคคล&nbsp;รวมถึงสิทธิต่าง&nbsp;ๆ&nbsp;ของเจ้าของข้อมูลส่วนบุคคล&nbsp;ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
            </p>
            <p>
              <strong>การเก็บรวบรวมข้อมูลส่วนบุคคล</strong>
            </p>
            <p>
              เราจะเก็บรวบรวมข้อมูลส่วนบุคคลที่ได้รับโดยตรงจากคุณผ่านช่องทาง&nbsp;ดังต่อไปนี้
            </p>
            <ul>
              <li>การสมัครสมาชิก</li>
            </ul>
            <p>
              <strong>ประเภทข้อมูลส่วนบุคคลที่เก็บรวบรวม</strong>
            </p>
            <p>
              <strong>ข้อมูลส่วนบุคคล</strong>{" "}
              เช่น&nbsp;ชื่อ&nbsp;นามสกุล&nbsp;อายุ&nbsp;วันเดือนปีเกิด&nbsp;สัญชาติ&nbsp;เลขประจำตัวประชาชน&nbsp;หนังสือเดินทาง&nbsp;เป็นต้น
            </p>
            <p>
              <strong>ข้อมูลการติดต่อ</strong>{" "}
              เช่น&nbsp;ที่อยู่&nbsp;หมายเลขโทรศัพท์&nbsp;อีเมล&nbsp;เป็นต้น
            </p>
            <p>
              <strong>หลักฐานแสดงตัวตน</strong>{" "}
              เช่น&nbsp;สำเนาบัตรประจำตัวประชาชน&nbsp;สำเนาหนังสือเดินทาง&nbsp;เป็นต้น
            </p>
            <p>
              <strong>ข้อมูลทางเทคนิค</strong> เช่น&nbsp;IP address, Cookie
              ID,&nbsp;ประวัติการใช้งานเว็บไซต์&nbsp;(Activity Log)&nbsp;เป็นต้น
            </p>
            <p>
              <strong>ข้อมูลอื่น</strong>
              <strong>&nbsp;</strong>
              <strong>ๆ</strong>{" "}
              เช่น&nbsp;รูปภาพ&nbsp;ภาพเคลื่อนไหว&nbsp;และข้อมูลอื่นใดที่ถือว่าเป็นข้อมูลส่วนบุคคลตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล
            </p>
            <p>
              <strong>ผู้เยาว์</strong>
            </p>
            <p>
              หากคุณมีอายุต่ำกว่า&nbsp;20&nbsp;ปีหรือมีข้อจำกัดความสามารถตามกฎหมาย&nbsp;เราอาจเก็บรวบรวม&nbsp;ใช้&nbsp;หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ&nbsp;เราอาจจำเป็นต้องให้พ่อแม่หรือผู้ปกครองของคุณให้ความยินยอมหรือที่กฎหมายอนุญาตให้ทำได้&nbsp;หากเราทราบว่ามีการเก็บรวบรวมข้อมูลส่วนบุคคลจากผู้เยาว์โดยไม่ได้รับความยินยอมจากพ่อแม่หรือผู้ปกครอง&nbsp;เราจะดำเนินการลบข้อมูลนั้นออกจากเซิร์ฟเวอร์ของเรา
            </p>
            <p>
              <strong>วิธีการเก็บรักษาข้อมูลส่วนบุคคล</strong>
            </p>
            <p>
              เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณในรูปแบบเอกสารและรูปแบบอิเล็กทรอนิกส์
            </p>
            <p>เราเก็บรักษาข้อมูลส่วนบุคคลของคุณ&nbsp;ดังต่อไปนี้</p>
            <ul>
              <li>เซิร์ฟเวอร์บริษัทของเราในประเทศไทย</li>
            </ul>
            <p>
              <strong>การประมวลผลข้อมูลส่วนบุคคล</strong>
            </p>
            <p>
              เราจะเก็บรวบรวม&nbsp;ใช้&nbsp;หรือเปิดเผยข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้
            </p>
            <ul>
              <li>เพื่อสร้างและจัดการบัญชีผู้ใช้งาน</li>
              <li>
                เพื่อปรับปรุงสินค้า&nbsp;บริการ&nbsp;หรือประสบการณ์การใช้งาน
              </li>
              <li>เพื่อการบริหารจัดการภายในบริษัท</li>
              <li>เพื่อรวบรวมข้อเสนอแนะ</li>
              <li>
                เพื่อปฏิบัติตามข้อตกลงและเงื่อนไข&nbsp;(Terms and Conditions)
              </li>
              <li>เพื่อปฏิบัติตามกฎหมายและกฎระเบียบของหน่วยงานราชการ</li>
            </ul>
            <p>
              <strong>การเปิดเผยข้อมูลส่วนบุคคล</strong>
            </p>
            <p>
              เราอาจเปิดเผยข้อมูลส่วนบุคคลของคุณให้แก่ผู้อื่นภายใต้ความยินยอมของคุณหรือที่กฎหมายอนุญาตให้เปิดเผยได้&nbsp;ดังต่อไปนี้
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>การบังคับใช้กฎหมาย</strong>
            </p>
            <p>
              ในกรณีที่มีกฎหมายหรือหน่วยงานราชการร้องขอ&nbsp;เราจะเปิดเผยข้อมูลส่วนบุคคลของคุณเท่าที่จำเป็นให้แก่หน่วยงานราชการ&nbsp;เช่น&nbsp;ศาล&nbsp;หน่วยงานราชการ&nbsp;เป็นต้น
            </p>
            <p>
              <strong>ระยะเวลาจัดเก็บข้อมูลส่วนบุคคล</strong>
            </p>
            <p>
              เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณไว้ตามระยะเวลาที่จำเป็นในระหว่างที่คุณเป็นลูกค้าหรือมีความสัมพันธ์อยู่กับเราหรือตลอดระยะเวลาที่จำเป็นเพื่อให้บรรลุวัตถุประสงค์ที่เกี่ยวข้องกับนโยบายฉบับนี้&nbsp;ซึ่งอาจจำเป็นต้องเก็บรักษาไว้ต่อไปภายหลังจากนั้น&nbsp;หากมีกฎหมายกำหนดไว้&nbsp;เราจะลบ&nbsp;ทำลาย&nbsp;หรือทำให้เป็นข้อมูลที่ไม่สามารถระบุตัวตนของคุณได้&nbsp;เมื่อหมดความจำเป็นหรือสิ้นสุดระยะเวลาดังกล่าว
            </p>
            <p>
              <strong>สิทธิของเจ้าของข้อมูลส่วนบุคคล</strong>
            </p>
            <p>
              ภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคล&nbsp;&nbsp;คุณมีสิทธิในการดำเนินการดังต่อไปนี้
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>สิทธิขอถอนความยินยอม</strong>
              <strong>&nbsp;(right to withdraw consent)</strong>{" "}
              หากคุณได้ให้ความยินยอม&nbsp;เราจะเก็บรวบรวม&nbsp;ใช้&nbsp;หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ&nbsp;ไม่ว่าจะเป็นความยินยอมที่คุณให้ไว้ก่อนวันที่กฎหมายคุ้มครองข้อมูลส่วนบุคคลใช้บังคับหรือหลังจากนั้น&nbsp;คุณมีสิทธิที่จะถอนความยินยอมเมื่อใดก็ได้ตลอดเวลา
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>สิทธิขอเข้าถึงข้อมูล</strong>
              <strong>&nbsp;(right to access)</strong>{" "}
              คุณมีสิทธิขอเข้าถึงข้อมูลส่วนบุคคลของคุณที่อยู่ในความรับผิดชอบของเราและขอให้เราทำสำเนาข้อมูลดังกล่าวให้แก่คุณ&nbsp;&nbsp;รวมถึงขอให้เราเปิดเผยว่าเราได้ข้อมูลส่วนบุคคลของคุณมาได้อย่างไร
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>สิทธิขอถ่ายโอนข้อมูล</strong>
              <strong>&nbsp;(right to data portability)</strong>{" "}
              คุณมีสิทธิขอรับข้อมูลส่วนบุคคลของคุณในกรณีที่เราได้จัดทำข้อมูลส่วนบุคคลนั้นอยู่ในรูปแบบให้สามารถอ่านหรือใช้งานได้ด้วยเครื่องมือหรืออุปกรณ์ที่ทำงานได้โดยอัตโนมัติและสามารถใช้หรือเปิดเผยข้อมูลส่วนบุคคลได้ด้วยวิธีการอัตโนมัติ&nbsp;รวมทั้งมีสิทธิขอให้เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นเมื่อสามารถทำได้ด้วยวิธีการอัตโนมัติ&nbsp;และมีสิทธิขอรับข้อมูลส่วนบุคคลที่เราส่งหรือโอนข้อมูลส่วนบุคคลในรูปแบบดังกล่าวไปยังผู้ควบคุมข้อมูลส่วนบุคคลอื่นโดยตรง&nbsp;เว้นแต่ไม่สามารถดำเนินการได้เพราะเหตุทางเทคนิค
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>สิทธิขอคัดค้าน</strong>
              <strong>&nbsp;(right to object)</strong>{" "}
              &nbsp;คุณมีสิทธิขอคัดค้านการเก็บรวบรวม&nbsp;ใช้&nbsp;หรือเปิดเผยข้อมูลส่วนบุคคลของคุณในเวลาใดก็ได้&nbsp;หากการเก็บรวบรวม&nbsp;ใช้&nbsp;หรือเปิดเผยข้อมูลส่วนบุคคลของคุณที่ทำขึ้นเพื่อการดำเนินงานที่จำเป็นภายใต้ประโยชน์โดยชอบด้วยกฎหมายของเราหรือของบุคคลหรือนิติบุคคลอื่น&nbsp;โดยไม่เกินขอบเขตที่คุณสามารถคาดหมายได้อย่างสมเหตุสมผลหรือเพื่อดำเนินการตามภารกิจเพื่อสาธารณประโยชน์
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>สิทธิขอให้ลบหรือทำลายข้อมูล</strong>
              <strong>&nbsp;(right to erasure/destruction)</strong>{" "}
              คุณมีสิทธิขอลบหรือทำลายข้อมูลส่วนบุคคลของคุณหรือทำให้ข้อมูลส่วนบุคคลเป็นข้อมูลที่ไม่สามารถระบุตัวคุณได้&nbsp;หากคุณเชื่อว่าข้อมูลส่วนบุคคลของคุณถูกเก็บรวบรวม&nbsp;ใช้&nbsp;หรือเปิดเผยโดยไม่ชอบด้วยกฎหมายที่เกี่ยวข้องหรือเห็นว่าเราหมดความจำเป็นในการเก็บรักษาไว้ตามวัตถุประสงค์ที่เกี่ยวข้องในนโยบายฉบับนี้&nbsp;หรือเมื่อคุณได้ใช้สิทธิขอถอนความยินยอมหรือใช้สิทธิขอคัดค้านตามที่แจ้งไว้ข้างต้นแล้ว
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>สิทธิขอให้ระงับการใช้ข้อมูล</strong>
              <strong>&nbsp;(right to restriction of processing)</strong>{" "}
              คุณมีสิทธิขอให้ระงับการใช้ข้อมูลส่วนบุคคลชั่วคราวในกรณีที่เราอยู่ระหว่างตรวจสอบตามคำร้องขอใช้สิทธิขอแก้ไขข้อมูลส่วนบุคคลหรือขอคัดค้านของคุณหรือกรณีอื่นใดที่เราหมดความจำเป็นและต้องลบหรือทำลายข้อมูลส่วนบุคคลของคุณตามกฎหมายที่เกี่ยวข้องแต่คุณขอให้เราระงับการใช้แทน
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>สิทธิขอให้แก้ไขข้อมูล</strong>
              <strong>&nbsp;(right to rectification)</strong>{" "}
              คุณมีสิทธิขอแก้ไขข้อมูลส่วนบุคคลของคุณให้ถูกต้อง&nbsp;เป็นปัจจุบัน&nbsp;สมบูรณ์&nbsp;และไม่ก่อให้เกิดความเข้าใจผิด
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>สิทธิร้องเรียน</strong>
              <strong>&nbsp;(right to lodge a complaint)</strong>{" "}
              คุณมีสิทธิร้องเรียนต่อผู้มีอำนาจตามกฎหมายที่เกี่ยวข้อง&nbsp;หากคุณเชื่อว่าการเก็บรวบรวม&nbsp;ใช้&nbsp;หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ&nbsp;เป็นการกระทำในลักษณะที่ฝ่าฝืนหรือไม่ปฏิบัติตามกฎหมายที่เกี่ยวข้อง
            </p>
            <p>
              <br />
            </p>
            <p>
              คุณสามารถใช้สิทธิของคุณในฐานะเจ้าของข้อมูลส่วนบุคคลข้างต้นได้&nbsp;โดยติดต่อมาที่เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราตามรายละเอียดท้ายนโยบายนี้&nbsp;เราจะแจ้งผลการดำเนินการภายในระยะเวลา&nbsp;30&nbsp;วัน&nbsp;นับแต่วันที่เราได้รับคำขอใช้สิทธิจากคุณ&nbsp;ตามแบบฟอร์มหรือวิธีการที่เรากำหนด&nbsp;ทั้งนี้&nbsp;หากเราปฏิเสธคำขอเราจะแจ้งเหตุผลของการปฏิเสธให้คุณทราบผ่านช่องทางต่าง&nbsp;ๆ&nbsp;เช่น&nbsp;ข้อความ&nbsp;(SMS)&nbsp;อีเมล&nbsp;โทรศัพท์&nbsp;จดหมาย&nbsp;เป็นต้น
            </p>
            <p>
              <strong>เทคโนโลยีติดตามตัวบุคคล</strong>
              <strong>&nbsp;(Cookies)</strong>
            </p>
            <p>
              เพื่อเพิ่มประสบการณ์การใช้งานของคุณให้สมบูรณ์และมีประสิทธิภาพมากขึ้น&nbsp;เราใช้คุกกี้&nbsp;(Cookies)หรือเทคโนโลยีที่คล้ายคลึงกัน&nbsp;เพื่อพัฒนาการเข้าถึงสินค้าหรือบริการ&nbsp;โฆษณาที่เหมาะสม&nbsp;และติดตามการใช้งานของคุณ&nbsp;เราใช้คุกกี้เพื่อระบุและติดตามผู้ใช้งานเว็บไซต์และการเข้าถึงเว็บไซต์ของเรา&nbsp;หากคุณไม่ต้องการให้มีคุกกี้ไว้ในคอมพิวเตอร์ของคุณ&nbsp;คุณสามารถตั้งค่าบราวเซอร์เพื่อปฏิเสธคุกกี้ก่อนที่จะใช้เว็บไซต์ของเราได้
            </p>
            <p>
              <strong>การรักษาความมั่งคงปลอดภัยของข้อมูลส่วนบุคคล</strong>
            </p>
            <p>
              เราจะรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคลของคุณไว้ตามหลักการ&nbsp;การรักษาความลับ&nbsp;(confidentiality)&nbsp;ความถูกต้องครบถ้วน&nbsp;(integrity)&nbsp;และสภาพพร้อมใช้งาน&nbsp;(availability)&nbsp;ทั้งนี้&nbsp;เพื่อป้องกันการสูญหาย&nbsp;เข้าถึง&nbsp;ใช้&nbsp;เปลี่ยนแปลง&nbsp;แก้ไข&nbsp;หรือเปิดเผย&nbsp;นอกจากนี้เราจะจัดให้มีมาตรการรักษาความมั่นคงปลอดภัยของข้อมูลส่วนบุคคล&nbsp;ซึ่งครอบคลุมถึงมาตรการป้องกันด้านการบริหารจัดการ&nbsp;(administrative
              safeguard)&nbsp;มาตรการป้องกันด้านเทคนิค&nbsp;(technical
              safeguard)&nbsp;และมาตรการป้องกันทางกายภาพ&nbsp;(physical
              safeguard)&nbsp;ในเรื่องการเข้าถึงหรือควบคุมการใช้งานข้อมูลส่วนบุคคล&nbsp;(access
              control)
            </p>
            <p>
              <strong>การแจ้งเหตุละเมิดข้อมูลส่วนบุคคล</strong>
            </p>
            <p>
              ในกรณีที่มีเหตุละเมิดข้อมูลส่วนบุคคลของคุณเกิดขึ้น&nbsp;เราจะแจ้งให้สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลทราบโดยไม่ชักช้าภายใน&nbsp;72&nbsp;ชั่วโมง&nbsp;นับแต่ทราบเหตุเท่าที่สามารถกระทำได้&nbsp;ในกรณีที่การละเมิดมีความเสี่ยงสูงที่จะมีผลกระทบต่อสิทธิและเสรีภาพของคุณ&nbsp;เราจะแจ้งการละเมิดให้คุณทราบพร้อมกับแนวทางการเยียวยาโดยไม่ชักช้าผ่านช่องทางต่าง&nbsp;ๆ&nbsp;เช่น&nbsp;&nbsp;เว็บไซต์&nbsp;ข้อความ&nbsp;(SMS)&nbsp;อีเมล&nbsp;โทรศัพท์&nbsp;จดหมาย&nbsp;เป็นต้น
            </p>
            <p>
              <strong>การแก้ไขเปลี่ยนแปลงนโยบายความเป็นส่วนตัว</strong>
            </p>
            <p>
              เราอาจแก้ไขเปลี่ยนแปลงนโยบายนี้เป็นครั้งคราว&nbsp;โดยคุณสามารถทราบข้อกำหนดและเงื่อนไขนโยบายที่มีการแก้ไขเปลี่ยนแปลงนี้ได้ผ่านทางเว็บไซต์ของเรา
            </p>
            <p>
              นโยบายนี้แก้ไขล่าสุดและมีผลใช้บังคับตั้งแต่วันที่&nbsp;23&nbsp;พฤษภาคม&nbsp;2566
            </p>
            <p>
              <strong>นโยบายความเป็นส่วนตัวของเว็บไซต์อื่น</strong>
            </p>
            <p>
              นโยบายความเป็นส่วนตัวฉบับนี้ใช้สำหรับการเสนอสินค้า&nbsp;บริการ&nbsp;และการใช้งานบนเว็บไซต์สำหรับลูกค้าของเราเท่านั้น&nbsp;หากคุณเข้าชมเว็บไซต์อื่นแม้จะผ่านช่องทางเว็บไซต์ของเรา&nbsp;การคุ้มครองข้อมูลส่วนบุคคลต่าง&nbsp;ๆ&nbsp;จะเป็นไปตามนโยบายความเป็นส่วนตัวของเว็บไซต์นั้น&nbsp;ซึ่งเราไม่มีส่วนเกี่ยวข้องด้วย
            </p>
            <p>
              <strong>รายละเอียดการติดต่อ</strong>
            </p>
            <p>
              หากคุณต้องการสอบถามข้อมูลเกี่ยวกับนโยบายความเป็นส่วนตัวฉบับนี้&nbsp;รวมถึงการขอใช้สิทธิต่าง&nbsp;ๆ&nbsp;คุณสามารถติดต่อเราหรือเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลของเราได้&nbsp;ดังนี้
            </p>
            <p>
              <br />
            </p>
            <p>
              <strong>ผู้ควบคุมข้อมูลส่วนบุคคล</strong>
            </p>
            <p>กลุ่มกิจกรรมเทคโนโลยี&nbsp;มหาวิทยาลัยเกษตรศาสตร์</p>
            <p>
              50&nbsp;ถนน&nbsp;งามวงศ์วาน&nbsp;&nbsp;ลาดยาว&nbsp;&nbsp;จตุจักร&nbsp;&nbsp;กรุงเทพมหานคร&nbsp;&nbsp;10900
            </p>
            <p>อีเมล ku.t3ch@gmail.com</p>
            <p>เว็บไซต์ <a href="https://kutech.club/">kutech.club</a></p>
            <p>หมายเลขโทรศัพท์&nbsp;025790113</p>
            <p>
              <br />
            </p>
            <p>
              <strong>เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล</strong>
            </p>
            <p>ทีม Dev</p>
            <p>
              50&nbsp;ถนน&nbsp;งามวงศ์วาน&nbsp;&nbsp;ลาดยาว&nbsp;&nbsp;จตุจักร&nbsp;&nbsp;กรุงเทพมหานคร&nbsp;&nbsp;10900
            </p>
            <p>อีเมล ku.t3ch@gmail.com</p>
          </div>
        </div>
      </div>
    </WithNavbar>
  );
};

export default Privacy;
