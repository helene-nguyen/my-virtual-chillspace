class CoreModel {
  name;
  data;

  async findAll() {
    if (this.data === undefined) return `No ${this.name} found !`;
    return await this.data;
  }

  async findOne(id) {
    if (this.data === undefined) return `No ${this.name} found !`;
    const data = this.data.filter((elem) => {
      if (elem.id === id) return elem;
    });
    return data[0];
  }
}

export { CoreModel };
