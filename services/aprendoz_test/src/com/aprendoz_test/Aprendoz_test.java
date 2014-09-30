
package com.aprendoz_test;

import java.util.Date;
import java.util.List;
import com.aprendoz_test.data.output.A_getCursoProcesoSVRtnType;
import com.aprendoz_test.data.output.ComplexSendMailRtnType;
import com.aprendoz_test.data.output.CursosRtnType;
import com.aprendoz_test.data.output.EnviarMailEventualidadesRtnType;
import com.aprendoz_test.data.output.GetCurseByidGradeRtnType;
import com.aprendoz_test.data.output.GetEmailsFamiliarGroupRtnType;
import com.aprendoz_test.data.output.GetListStudentsByCurseRtnType;
import com.aprendoz_test.data.output.GetMaxSubjectByGradeRtnType;
import com.aprendoz_test.data.output.GetSubjectsByProfileRtnType;
import com.aprendoz_test.data.output.GetSyByCurDateFullRtnType;
import com.aprendoz_test.data.output.GetSyByCurDateRtnType;
import com.aprendoz_test.data.output.GetTipoEventualidadByIdSubTipoRtnType;
import com.aprendoz_test.data.output.HQLlsCursosRtnType;
import com.aprendoz_test.data.output.HQLlsGradoRtnType;
import com.aprendoz_test.data.output.HQLlsPeriodoRtnType;
import com.aprendoz_test.data.output.HqlPersonaEventualidadRtnType;
import com.aprendoz_test.data.output.Hql_aprendizaje_detallesRtnType;
import com.aprendoz_test.data.output.Hql_tipo_eventualidadRtnType;
import com.aprendoz_test.data.output.Last_accessHQLRtnType;
import com.aprendoz_test.data.output.LsCursosRtnType;
import com.aprendoz_test.data.output.SeachEventualidadHQLRtnType;
import com.aprendoz_test.data.output.SearchReportesAlumnosRtnType;
import com.aprendoz_test.data.output.SearchStudentsByComplexNameNoStudentsRtnType;
import com.aprendoz_test.data.output.SearchStudentsByComplexNameRtnType;
import com.aprendoz_test.data.output.SendMailHQLOneRtnType;
import com.aprendoz_test.data.output.SendMailHQLRtnType;
import com.aprendoz_test.data.output.ShowInformationUserRtnType;
import com.aprendoz_test.data.output.StudentsByCurseBySubjectRtnType;
import com.aprendoz_test.data.output.SubjectDetailsRtnType;
import com.aprendoz_test.data.output.SubjectsAxisRtnType;
import com.aprendoz_test.data.output.SubjectsByGradeRtnType;
import com.aprendoz_test.data.output.SubjectsBySyAndStudentRtnType;
import com.aprendoz_test.data.output.SubjectsByTeachersByCurseByPerRtnType;
import com.aprendoz_test.data.output.SubjectsCirruculumRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "aprendoz_test"
 *  09/29/2014 19:08:19
 * 
 */
@SuppressWarnings("unchecked")
public class Aprendoz_test
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<ComplexSendMailRtnType> complexSendMail(Integer ide) {
        return ((List<ComplexSendMailRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.complexSendMailQueryName), ide));
    }

    public List<SubjectsByGradeRtnType> subjectsByGrade(Integer _sy, Integer _grado) {
        return ((List<SubjectsByGradeRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.subjectsByGradeQueryName), _sy, _grado));
    }

    public List<CursosRtnType> cursos(Integer idg) {
        return ((List<CursosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.cursosQueryName), idg));
    }

    public List<SendMailHQLOneRtnType> sendMailHQLOne(Integer ide, Integer ppersona) {
        return ((List<SendMailHQLOneRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.sendMailHQLOneQueryName), ide, ppersona));
    }

    public List<LsCursosRtnType> lsCursos() {
        return ((List<LsCursosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.lsCursosQueryName)));
    }

    public List<GetEmailsFamiliarGroupRtnType> getEmailsFamiliarGroup(Integer pgrupo, Integer ppersona) {
        return ((List<GetEmailsFamiliarGroupRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getEmailsFamiliarGroupQueryName), pgrupo, ppersona));
    }

    public List<SearchStudentsByComplexNameRtnType> searchStudentsByComplexName(String search) {
        return ((List<SearchStudentsByComplexNameRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.searchStudentsByComplexNameQueryName), search));
    }

    public List<GetListStudentsByCurseRtnType> getListStudentsByCurse(Integer pcurso, Integer pidsy) {
        return ((List<GetListStudentsByCurseRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getListStudentsByCurseQueryName), pcurso, pidsy));
    }

    public com.aprendoz_test.data.output.GetCountGenderRtnType getCountGender(Integer sy, Integer curso) {
        List<com.aprendoz_test.data.output.GetCountGenderRtnType> rtn = ((List<com.aprendoz_test.data.output.GetCountGenderRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getCountGenderQueryName), sy, curso));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<HQLlsPeriodoRtnType> hQLlsPeriodo() {
        return ((List<HQLlsPeriodoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.HQLlsPeriodoQueryName)));
    }

    public Integer hql_deleteLearnings(Integer ida) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.hql_deleteLearningsQueryName), ida));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<HQLlsCursosRtnType> hQLlsCursos() {
        return ((List<HQLlsCursosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.HQLlsCursosQueryName)));
    }

    public List<EnviarMailEventualidadesRtnType> enviarMailEventualidades(Integer ide) {
        return ((List<EnviarMailEventualidadesRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.enviarMailEventualidadesQueryName), ide));
    }

    public List<GetTipoEventualidadByIdSubTipoRtnType> getTipoEventualidadByIdSubTipo(Integer id) {
        return ((List<GetTipoEventualidadByIdSubTipoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getTipoEventualidadByIdSubTipoQueryName), id));
    }

    public Integer deleteInscCursAsig(Long icaId) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.deleteInscCursAsigQueryName), icaId));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer crearPlan(String p1, String p2, String p3, Date fecha_plan, Integer id) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.crearPlanQueryName), p1, p2, p3, fecha_plan, id));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<HQLlsGradoRtnType> hQLlsGrado() {
        return ((List<HQLlsGradoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.HQLlsGradoQueryName)));
    }

    public List<SubjectsByTeachersByCurseByPerRtnType> subjectsByTeachersByCurseByPer(Integer idper, Integer idc) {
        return ((List<SubjectsByTeachersByCurseByPerRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.subjectsByTeachersByCurseByPerQueryName), idper, idc));
    }

    public List<HqlPersonaEventualidadRtnType> hqlPersonaEventualidad(Integer ide) {
        return ((List<HqlPersonaEventualidadRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.hqlPersonaEventualidadQueryName), ide));
    }

    public com.aprendoz_test.data.output.GetCountGenderFemaleRtnType getCountGenderFemale(Integer sy, Integer curso) {
        List<com.aprendoz_test.data.output.GetCountGenderFemaleRtnType> rtn = ((List<com.aprendoz_test.data.output.GetCountGenderFemaleRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getCountGenderFemaleQueryName), sy, curso));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<A_getCursoProcesoSVRtnType> a_getCursoProcesoSV(Integer ppersona) {
        return ((List<A_getCursoProcesoSVRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.a_getCursoProcesoSVQueryName), ppersona));
    }

    public List<StudentsByCurseBySubjectRtnType> studentsByCurseBySubject(Integer pasignatura, Integer pcurso, Integer idsy) {
        return ((List<StudentsByCurseBySubjectRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.studentsByCurseBySubjectQueryName), pasignatura, pcurso, idsy));
    }

    public com.aprendoz_test.data.output.GetFullNameRtnType getFullName(String usuario) {
        List<com.aprendoz_test.data.output.GetFullNameRtnType> rtn = ((List<com.aprendoz_test.data.output.GetFullNameRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getFullNameQueryName), usuario));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<Hql_tipo_eventualidadRtnType> hql_tipo_eventualidad() {
        return ((List<Hql_tipo_eventualidadRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.hql_tipo_eventualidadQueryName)));
    }

    public Integer deleteSubject(Integer idasignatura) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.deleteSubjectQueryName), idasignatura));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<GetSyByCurDateRtnType> getSyByCurDate(Date f1) {
        return ((List<GetSyByCurDateRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getSyByCurDateQueryName), f1));
    }

    public com.aprendoz_test.data.output.GetTypeUserRtnType getTypeUser(String usuario) {
        List<com.aprendoz_test.data.output.GetTypeUserRtnType> rtn = ((List<com.aprendoz_test.data.output.GetTypeUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getTypeUserQueryName), usuario));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public com.aprendoz_test.data.DimensionCurricular getDimensionCurricularById(Integer id) {
        List<com.aprendoz_test.data.DimensionCurricular> rtn = ((List<com.aprendoz_test.data.DimensionCurricular> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getDimensionCurricularByIdQueryName), id));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<GetSyByCurDateFullRtnType> getSyByCurDateFull(Integer f1) {
        return ((List<GetSyByCurDateFullRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getSyByCurDateFullQueryName), f1));
    }

    public Integer actualizarClave(String clave, String usuario) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.actualizarClaveQueryName), clave, usuario));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<SubjectsAxisRtnType> subjectsAxis(Integer ida) {
        return ((List<SubjectsAxisRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.subjectsAxisQueryName), ida));
    }

    public List<SearchReportesAlumnosRtnType> searchReportesAlumnos(String search) {
        return ((List<SearchReportesAlumnosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.searchReportesAlumnosQueryName), search));
    }

    public List<GetMaxSubjectByGradeRtnType> getMaxSubjectByGrade(Integer idgrado, Integer idsy) {
        return ((List<GetMaxSubjectByGradeRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getMaxSubjectByGradeQueryName), idgrado, idsy));
    }

    public List<GetCurseByidGradeRtnType> getCurseByidGrade(Integer pgrado) {
        return ((List<GetCurseByidGradeRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getCurseByidGradeQueryName), pgrado));
    }

    public List<SubjectsCirruculumRtnType> subjectsCirruculum(Integer pidgrado, Integer pidsy) {
        return ((List<SubjectsCirruculumRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.subjectsCirruculumQueryName), pidgrado, pidsy));
    }

    public List<Last_accessHQLRtnType> last_accessHQL(String user) {
        return ((List<Last_accessHQLRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.last_accessHQLQueryName), user));
    }

    public List<GetSubjectsByProfileRtnType> getSubjectsByProfile(Integer pgrado, Integer idsy) {
        return ((List<GetSubjectsByProfileRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getSubjectsByProfileQueryName), pgrado, idsy));
    }

    public List<SendMailHQLRtnType> sendMailHQL(Integer ide) {
        return ((List<SendMailHQLRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.sendMailHQLQueryName), ide));
    }

    public List<Hql_aprendizaje_detallesRtnType> hql_aprendizaje_detalles(Integer idaprendizajes) {
        return ((List<Hql_aprendizaje_detallesRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.hql_aprendizaje_detallesQueryName), idaprendizajes));
    }

    public List<ShowInformationUserRtnType> showInformationUser(String user) {
        return ((List<ShowInformationUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.showInformationUserQueryName), user));
    }

    public List<SearchStudentsByComplexNameNoStudentsRtnType> searchStudentsByComplexNameNoStudents(String search) {
        return ((List<SearchStudentsByComplexNameNoStudentsRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.searchStudentsByComplexNameNoStudentsQueryName), search));
    }

    public Integer deleteEventualidadPersona(Integer epid) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.deleteEventualidadPersonaQueryName), epid));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public com.aprendoz_test.data.output.GetCountGenderMaleRtnType getCountGenderMale(Integer sy, Integer curso) {
        List<com.aprendoz_test.data.output.GetCountGenderMaleRtnType> rtn = ((List<com.aprendoz_test.data.output.GetCountGenderMaleRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getCountGenderMaleQueryName), sy, curso));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<SubjectsBySyAndStudentRtnType> subjectsBySyAndStudent(Integer idpersona, Integer idsyp) {
        return ((List<SubjectsBySyAndStudentRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.subjectsBySyAndStudentQueryName), idpersona, idsyp));
    }

    public List<SeachEventualidadHQLRtnType> seachEventualidadHQL(String search) {
        return ((List<SeachEventualidadHQLRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.SeachEventualidadHQLQueryName), search));
    }

    public List<SubjectDetailsRtnType> subjectDetails(Integer idasignatura) {
        return ((List<SubjectDetailsRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.subjectDetailsQueryName), idasignatura));
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
