import { Component } from "react";
import s from "./TransactionForm.module.css";

class TransactionForm extends Component {
  state = {
    date: "2022-07-28",
    time: "14:14",
    category: "продукти",
    summ: "",
    currency: "UAH",
    comment: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { handleOpenCategoriesList } = this.props;
    const { date, time, category, summ, currency, comment } = this.state;
    return (
      <form className={s.form}>
        <div className={s.div}>
          <label className={s.day}>
            День
            <input
              onChange={this.handleChange}
              className={s.inputDay}
              type="date"
              name="date"
              value={date}
            />
          </label>
          <label className={s.time}>
            Час
            <input
              className={s.inputTime}
              onChange={this.handleChange}
              type="time"
              name="time"
              value={time}
            />
          </label>
        </div>
        <label className={s.category}>
          Категорія
          <input
            className={s.categoryInput}
            onClick={handleOpenCategoriesList}
            type="button"
            name="category"
            value={category}
          />
        </label>
        <label className={s.summa}>
          Сума
          <input
            className={s.summaInput}
            onChange={this.handleChange}
            type="text"
            name="summ"
            value={summ}
            placeholder="Введіть суму"
          />
        </label>
        <label className={s.valyta}>
          Валюта
          <input
            className={s.valytaInput}
            onChange={this.handleChange}
            type="button"
            name="currency"
            value={currency}
          />
        </label>
        <label className={s.comment}>
          <input
            className={s.commentInput}
            onChange={this.handleChange}
            type="text"
            name="comment"
            value={comment}
            placeholder="Коментар"
          />
        </label>
      </form>
    );
  }
}

export default TransactionForm;
