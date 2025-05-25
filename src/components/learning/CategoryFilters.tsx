
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Category {
  name: string;
  value: string;
  count: number;
  icon: string;
}

interface CategoryFiltersProps {
  categories: Category[];
}

const CategoryFilters = ({ categories }: CategoryFiltersProps) => {
  return (
    <TabsList className="flex flex-wrap gap-2 mb-6 h-auto bg-transparent p-0">
      {categories.map((category) => (
        <TabsTrigger 
          key={category.value}
          value={category.value}
          className="data-[state=active]:bg-edu-primary data-[state=active]:text-white flex items-center gap-2"
        >
          <span>{category.icon}</span>
          {category.name} ({category.count})
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default CategoryFilters;
