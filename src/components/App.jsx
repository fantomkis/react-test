import { Component } from "react";
import MainPage from "./MainPage/MainPage";
import TransactionHistoryPage from "./TransactionHistoryPage/TransactionHistoryPage";

export class App extends Component {
  state = {
    activePage: "main",
    categories: [
      { title: "Їжа", id: "1" },
      { title: "Різне", id: "2" },
      { title: "Кавун", id: "3" },
    ],
  };

  addCategory = (newCategory) => {
    this.setState((prevState) => ({
      categories: [...prevState.categories, newCategory],
    }));
  };

  onIncomesBtnClick = () => {
    this.setState({ activePage: "incomes" });
  };

  onCostsBtnClick = () => {
    this.setState({ activePage: "costs" });
  };
  onReturnBtnClick = () => {
    this.setState({ activePage: "main" });
  };

  render() {
    const { activePage, categories } = this.state;
    switch (activePage) {
      case "main":
        return (
          <MainPage
            addCategory={this.addCategory}
            onIncomesBtnClick={this.onIncomesBtnClick}
            onCostsBtnClick={this.onCostsBtnClick}
            categories={categories}
          />
        );
      case "costs":
        return (
          <TransactionHistoryPage
            transType={activePage}
            onReturnBtnClick={this.onReturnBtnClick}
          />
        );
      case "incomes":
        return (
          <TransactionHistoryPage
            transType={activePage}
            onReturnBtnClick={this.onReturnBtnClick}
          />
        );
      default:
        return;
    }
  }
}
