import React from 'react'

class Categories extends React.Component {
    render() {
        return (
            <div className="categories">
                <select
                    name="categories"
                    id="categories"
                    className="form-control"
                    onChange={e => this
                    .props
                    .onChange(e.target.value)}>
                    <option value="SHOW_ALL_POSTS">All</option>
                    {Object
                        .keys(this.props.categories)
                        .length !== 0 && this
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