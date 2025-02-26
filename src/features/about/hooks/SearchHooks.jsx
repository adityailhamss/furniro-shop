import { useState } from "react";
import About1 from "../../../assets/image/About1.png";
import About2 from "../../../assets/image/About2.png";
import About3 from "../../../assets/image/About3.png";

const content = [
  { image: About1, title: "Millennial Design", description: "Lorem ipsum..." },
  { image: About2, title: "Decorating Ideas", description: "Lorem ipsum..." },
  { image: About3, title: "Handmade Pieces", description: "Lorem ipsum..." },
];

export default function useSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContent, setFilteredContent] = useState(content);

  const handleSearch = (e) => {
    e.preventDefault();
    setFilteredContent(
      content.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return { searchTerm, setSearchTerm, filteredContent, handleSearch };
}
