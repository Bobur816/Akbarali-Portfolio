import { useNavigate, useParams } from "react-router-dom";
import "../sass/components/project.scss";
import { useQuery } from "@tanstack/react-query";
import { getProjectData } from "../services/apiProjects";
import Spinner from "../UI/Spinner/Spinner";
import { HiMiniArrowUpRight, HiMiniXMark } from "react-icons/hi2";

import "swiper/css";
import ImageCarousel from "../UI/ImageCarousel";

function Project() {
  const { id: projectId } = useParams();
  const navigate = useNavigate();
  const { data: project, isLoading } = useQuery({
    queryKey: ["Projects", projectId], // `queryKey` ga projectId kiritildi
    queryFn: () => getProjectData(projectId), // `queryFn` faqat fetch funksiyasini chaqiradi
    enabled: !!projectId, // projectId mavjud bo'lganda faqat fetch qiladi
  });

  const { name, description, timeline, role, imageCollection, projectLink, tags, companyName } = project?.[0]! || {};

  if (isLoading) {
    return (
      <div className="center-layout">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="project-layout">
      <div className="project-carousel">
        <ImageCarousel images={imageCollection} />
      </div>
      <div className="project-info">
        <div className="project-info_top">
          <h3 className="project-name info-box">{name}</h3>
          <a className="top-btn info-box" target="blank" href={projectLink}>
            <HiMiniArrowUpRight />
          </a>
          <button className="top-btn info-box btn-close" onClick={() => navigate(-1)}>
            <HiMiniXMark />
          </button>
        </div>
        <div className="project-info_middle info-box">
          <div>
            <h4>Company</h4>
            <p>{companyName}</p>
          </div>
          <div>
            <h4>Year</h4>
            <p>{timeline}</p>
          </div>
          <div>
            <h4>Type</h4>
            <ul>
              {tags?.map((tag: string) => (
                <span className="tag-item" key={tag}>
                  {tag}
                </span>
              ))}
            </ul>
          </div>
        </div>
        <div className="project-info_bottom info-box">
          <h4>Overview</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
