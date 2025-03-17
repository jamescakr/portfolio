import { GraduationCap, Trophy, Aperture } from "lucide-react";

export const ExpIconMap = {
  graduation: (
    <div className="custom-hover">
      <GraduationCap className="w-10 h-10" />
    </div>
  ),
  award: (
    <div className="custom-hover">
      <Trophy className="w-10 h-10" />
    </div>
  ),
  project: (
    <div className="custom-hover">
      <Aperture className="w-10 h-10" />
    </div>
  ),
};
