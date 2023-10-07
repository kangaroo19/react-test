import styles from "./Responsive.module.css";

export default function Responsive() {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.titleContainer}>
        <div>개인정보 수정</div>
      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.PWContainer}>
          <div className={styles.PWInner}>
            <div>비밀번호 변경</div>
            <input type="text" />
            <button>확인</button>
          </div>
          <div className={styles.text}>
            <div>*영어, 숫자를 조합해 8~12 자리로 만들어주세요.</div>
          </div>
        </div>
        {/* <div className={styles.inputContainer}>
          <div className={styles.inputInner}>
            <div>닉네임 변경</div>
            <input type="text" />
            <button>확인</button>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputInner}>
            <div>전화번호 변경</div>
            <input type="text" />
            <button>확인</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
