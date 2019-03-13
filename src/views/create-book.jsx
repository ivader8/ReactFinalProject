import React, { Component } from 'react'


class CreateBook extends Component {
    render() {
        return (
            <main>
                <div class="form-wrapper">
                    <h1>Create New Book</h1>
                    <form>
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" name="title" id="title"
                                placeholder="Enter book title" value="" />
                        </div>
                        <div class="form-group">
                            <label for="genres">Genres</label>
                            <input type="text" name="genres" id="genres"
                                placeholder="Enter genres for the book. Put a comma between them" value="" />
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <input type="text" name="description"
                                id="description" placeholder="Enter book description" value="" />
                        </div>
                        <div class="form-group">
                            <label for="image">Image URL</label>
                            <input type="text" name="image" id="image"
                                placeholder="Enter book image URL" value="" />
                        </div>
                        <div class="form-group">
                            <label for="author">Author</label>
                            <input type="text" name="author" id="author"
                                placeholder="Enter book author" value="" />
                        </div>
                        <div class="form-group">
                            <label for="price">Price</label>
                            <input type="number" name="price" id="price"
                                placeholder="Enter book price" value="" />
                        </div>
                        <input type="submit" value="Create" />
                    </form>
                </div>
            </main>
        )
    }

}

export default CreateBook;