import React from 'react';

import '../styles/index.css';
import { ButtonComponent } from './Buttons/button';
import { Content, Layout } from './Content/content';
import { BookList } from '../components/Lists/bookList';
import { HelloFunction } from './Hello/hello';
import { IBook } from './Lists/bookList.types';

const books: IBook[] = [{ title: 'Book 1' }, { title: 'Book 2' }, { title: 'Book 3' }];

const App = () => {
	return (
		<div>
			<Layout>
				<HelloFunction text={"hello"} />
				<Content />
				<BookList books={books} />
				<ButtonComponent text={"Counter Button"} />
			</Layout>

		</div>
	);
}
export default App;