module SearchHelper
  def highlight_search(word)
    content_tag(:span, word, :class => "highlight-busca")
  end
end
