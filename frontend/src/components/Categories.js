import React from 'react'

class Categories extends React.Component {
    // console.log(data.categories); if (data.categories.length === 0) {     return
    // <p>No Categories found.</p> }

    onChange = (value) => {
        //
        console.log(this.props);
    }
    render() {
        return (
            <div className="categories">
                <select
                    name="categories"
                    id="categories"
                    className="form-control"
                    onChange={e => this.props.onChange(e.target.value)}>
                    <option value="All">All</option>
                    {this
                        .props
                        .categories
                        .map((category) => (
                            <option key={category.name} value={category.name}>{category.path}</option>
                        ))
}
                </select>
            </div>
        )
    }
}

export default Categories;