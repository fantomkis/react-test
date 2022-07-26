function TransationForm() {
    return (    <form action="">
          <label>
            День
            <input type="date" name="data" />
          </label>

          <label>
            Час
            <input type="time" name="time" />
          </label>

          <label>
            Категорія
            <input type="button" name="category" />
          </label>
          <label>
            Сума
            <input type="text" name="summ" placeholder="Введіть суму" />
          </label>
          <label>
            Валюта
            <input type="button" name="currency" />
          </label>
          <label>
            
            <input type="text" name="comment" placeholder="Коментар" />
          </label>
        </form>)
    
}
export default TransationForm;