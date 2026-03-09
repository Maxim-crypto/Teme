fetch("data/resources.json")
  .then(response => response.json())
  .then(data => {
    const resourceList = document.getElementById("resource-list");
    const studyList = document.getElementById("study-list");
    const tagList = document.getElementById("tag-list");

    if (resourceList) {
      let allResourcesHtml = "<ul>";
      data.forEach(resource => {
        allResourcesHtml += `
          <li>
            <strong>${resource.name}</strong> - ${resource.location} - ${resource.program}
          </li>
        `;
      });
      allResourcesHtml += "</ul>";
      resourceList.innerHTML = allResourcesHtml;
    }

    if (studyList) {
      const studyResources = data.filter(resource => resource.type === "study");

      let studyHtml = "<ul>";
      studyResources.forEach(resource => {
        studyHtml += `
          <li>
            <strong>${resource.name}</strong> - ${resource.location}
          </li>
        `;
      });
      studyHtml += "</ul>";
      studyList.innerHTML = studyHtml;
    }

    if (tagList) {
      const allTags = [];

      data.forEach(resource => {
        resource.tags.forEach(tag => {
          if (!allTags.includes(tag)) {
            allTags.push(tag);
          }
        });
      });

      let tagsHtml = "<div class='tags'>";
      allTags.forEach(tag => {
        tagsHtml += `<span class="tag">${tag}</span>`;
      });
      tagsHtml += "</div>";

      tagList.innerHTML = tagsHtml;
    }
  })
  .catch(error => {
    console.error("Eroare la încărcarea resurselor:", error);
  });