//BMI計算オブジェクト
class BMI {
  constructor(height = 0, weight = 0) {
    this.height = height;
    this.weight = weight;
  }
  //BMI計算メソッド
  getBMI() {
    let bmi = this.weight / Math.pow(this.height / 100, 2);

    bmi = bmi * 10;
    bmi = Math.round(bmi);
    bmi = bmi / 10;

    return bmi;
  }

  getAdvice() {
    let bmi = this.weight / Math.pow(this.height / 100, 2);
    bmi = Math.round(idealweight);
    let idealweight = 22 * Math.pow(this.height / 100, 2);

    idealweight = Math.round(idealweight);

    //BMI22
    let adviceMessage = "理想体重です。現状を維持しましょう。";
    //BMI22以下
    if (bmi > 22) {
      adviceMessage = "太り気味です。" + idealweight + "kgを目指しましょう。";
    } else if (bmi < 22) {
      adviceMessage = "痩せ気味です。" + idealweight + "kgを目指しましょう。";
    }

    return adviceMessage;
  }
}
