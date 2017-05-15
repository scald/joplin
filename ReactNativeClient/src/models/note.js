import { BaseModel } from 'src/base-model.js';
import { Log } from 'src/log.js';

class Note extends BaseModel {

	static tableName() {
		return 'notes';
	}

	static useUuid() {
		return true;
	}

	static newNote() {
		return {
			id: null,
			title: '',
			body: '',
		}
	}

	static previews() {
		return this.db().selectAll('SELECT id, title, body, updated_time FROM notes').then((r) => {
			let output = [];
			for (let i = 0; i < r.rows.length; i++) {
				output.push(r.rows.item(i));
			}
			return output;
		});
	}

}

export { Note };