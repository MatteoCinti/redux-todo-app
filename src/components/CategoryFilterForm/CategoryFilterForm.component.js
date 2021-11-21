import SelectInput from '../SelectInput/SelectInput.component';

const CategoryFilterForm = () => (
  <section className="category-filter">
    <h6 className="category-filter__title">Filter Categories</h6>
    <SelectInput name="category-filter" label="Category-filter" className='category-filter' isFilter={true}/>
  </section> 
);

export default CategoryFilterForm;
