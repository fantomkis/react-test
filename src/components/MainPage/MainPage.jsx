import TransactionForm from "../TransactionForm/TransactionForm";
import CategoriesList from "../CategoriesList/CategoriesList";
import Header from "../Header/Header";
import s from "./MainPage.module.css";
import { Component } from "react";

class MainPage extends Component {
  state = {
    isCategoriesList: false,
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

  setCategories = (category) => {
    this.setState({ category });
  };

  handleOpenCategoriesList = () => {
    this.setState({ isCategoriesList: true });
  };
  handleCloseCategoriesList = () => {
    this.setState({ isCategoriesList: false });
  };

  render() {
    const { onIncomesBtnClick, onCostsBtnClick, addCategory, categories } =
      this.props;
    const { isCategoriesList, ...form } = this.state;
    return (
      <div className="container">
        <Header
          title={isCategoriesList ? " Категорії " : "Журнал витрат"}
          icon={isCategoriesList ? "#icon-arrow-left" : null}
          cbOnClick={this.handleCloseCategoriesList}
        />
        <main className={s.main}>
          {isCategoriesList ? (
            <CategoriesList
              categories={categories}
              addCategory={addCategory}
              setCategories={this.setCategories}
            />
          ) : (
            <>
              <TransactionForm
                handleChange={this.handleChange}
                form={form}
                handleOpenCategoriesList={this.handleOpenCategoriesList}
              />
              <div className={s.blockBtn}>
                <button className={s.costs} onClick={onCostsBtnClick}>
                  Всі витрати
                </button>
                <button className={s.incomes} onClick={onIncomesBtnClick}>
                  Всі прибутки
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    );
  }
}
export default MainPage;
