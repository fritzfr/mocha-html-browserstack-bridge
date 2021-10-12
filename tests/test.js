describe('some test', () => {
	it('should test', (done) => {
		const h1 = document.createElement('h1');

		document.getElementsByTagName('html')[0].appendChild(h1);
		assert.ok(Array.from(document.getElementsByTagName('h1')).length > 0);
		done();
	})
})