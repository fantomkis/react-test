const CategorisList = () => {
    return ( 
        <header>
            <button type="button">{"<-- Go beck"}</button>
            <h1>Категорія</h1>
            <main>
                <ul>
                    <li>Їжа</li>
                    <li>Різне</li>
                </ul>
                <form action="">
                    <input type="text" placeholder="Нова категорія" />
                    <button type="submit">+</button>
                </form>
            </main>
        </header>
    )
}

export default CategorisList;