const Layer = ({num}) => {

    const divs = () => {
        let array = [];
        for (let index = 0; index < num; index++) {
            array.push(
                <div className="col">
                    <div className="card border-dark text-center" >
                        <div class="card-body">
                            <ul class="list-group">
                                <button className="btn-primary">1</button>
                                <button className="btn-primary">1</button>
                            </ul>
                        </div>
                        <div className="card-footer">params</div>
                    </div>
                </div>
            )
        }
        return array
    }

    return ( 
        divs()
     );
}
 
export default Layer;